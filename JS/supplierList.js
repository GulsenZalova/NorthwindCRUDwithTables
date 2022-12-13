let supplierList = document.querySelector(".supplierList")

network.getAll('/suppliers')
    .then(data => {
        let newData
        data.forEach(element=>{
            console.log(data)
            newData = `
            <tr>
                <td>${element.companyName}</td>
                <td>${element.contactName}</td>
                <td>${element.contactTitle}</td>
                <td>${element.address.region}</td>
            </tr>
            `
            supplierList.innerHTML+=newData
        })
    })
