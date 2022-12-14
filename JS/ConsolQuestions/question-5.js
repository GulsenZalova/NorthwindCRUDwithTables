// 1996 və 1997-ci illər arasında konsolda sifarişləri göstərin
network.getAll('/orders')
    .then(data => {
        data.filter((a) => {
            if((new Date(a.orderDate).getFullYear()>=1996) &&(new Date(a.orderDate).getFullYear()<=1997)){
                console.log(a)
            }
        })
       
    })