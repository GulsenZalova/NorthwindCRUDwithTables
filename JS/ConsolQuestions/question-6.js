// Ən sevimli və nofrət edilən müştərini tapın

network.getAll("/orders")
    .then(data => {
        let allSum = 0
        data.forEach(element => {
            let sum = 0
            let unitPrice = element.details[0].unitPrice
            let quantity = element.details[0].quantity
            let discount = element.details[0].discount
            sum = (unitPrice * quantity) * (1 - discount)
            allSum += sum
            element.total = allSum
            let customerOrdersData = []
            data.forEach(element => {
                let customer = customerOrdersData.find(q => q.customerId == element.customerId)
                if (!customer) {
                    let newCustomerData = {
                        customerId: element.customerId,
                        customerTotalAmount: element.total
                    }
                    customerOrdersData.push(newCustomerData)
                }
                else {
                    customer.TotalAmount = customer.TotalAmount + element.total
                }
            })

            let sortedCustomerList=customerOrdersData.sort((a,b)=>a.customerTotalAmount-b.customerTotalAmount)
            console.log("HatedCustomer: ", sortedCustomerList[0].customerId, sortedCustomerList[0].customerTotalAmount)
            console.log("BelovedCustomer: ",sortedCustomerList[customerOrdersData.length-1].customerId, sortedCustomerList[customerOrdersData.length-1].customerTotalAmount)
        })

    })