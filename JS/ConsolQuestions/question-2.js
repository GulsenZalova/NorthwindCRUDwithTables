// Ortalama stock miktarı
network.getAll("/products")
.then(data=>{
    let stock=[]
    data.forEach(element => {
        stock.push(element.unitPrice)
    });
    console.log(("Ortalama stock miktarı: ",stock.reduce((a,b)=>(a+b))/stock.length).toFixed(2))
})