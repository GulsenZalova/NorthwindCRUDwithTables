
// London şəhərindəki müştəriləri yazdır

network.getAll("/customers")
.then(data=>{
    let newCustomerArr=data.filter(customer=>customer.address.city=="London")
     newCustomerArr.forEach(element => {
        console.log("London şəhərindəki müştəri: ",element.contactName)
     });
})