
network.getAll("/products")
.then(data=>{
   let newNameArr= (data.filter(product=>product.name.toLowerCase()[0]=="c"))
   newNameArr.forEach(element => {
        console.log("C ilə başlayan ürün adı: ",element.name)
   });
})