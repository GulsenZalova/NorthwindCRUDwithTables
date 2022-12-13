
//  En pahalı ürünü bulun
network.getAll('/products')
    .then(data => {
        const myPrice=data.sort((a,b)=>a.unitPrice-b.unitPrice)
        console.log(`En Pahalı Ürün` , myPrice[myPrice.length-1].unitPrice)
    })


