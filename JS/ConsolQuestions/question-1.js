// network.getAll('/products')
//     .then(data => {
//         console.log(data)
//         const myPrice=data.sort((a,b)=>a.unitPrice-b.unitPrice)
//         console.log(`En Pahalı Ürün` , myPrice[myPrice.length-1])
//     })

network.getAll('/products')
    .then(data => {
        let stock=[]
        data.forEach(element => {
           stock.push(element.unitsInStock)
        });
        // unitsInStock
        stock= data.reduce((a, b) => a + b)
        console.log
    })

