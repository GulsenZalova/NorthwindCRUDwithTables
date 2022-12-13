let orderList = document.querySelector(".orderlist")

network.getAll('/orders')
    .then(data => {
        let sortDate = data.sort((a,b) => new Date(a.orderDate) - new Date(b.orderDate))
        displayData(sortDate)
    })



function displayData(data) {
    data.forEach((element, id) => {
        orderList.innerHTML += `
                    <tr>
                    <td>${element.customerId}</td>
                    <td>${element.employeeId}</td>
                    <td>${element.orderDate}</td>
                    </tr>
                    `
    })

}