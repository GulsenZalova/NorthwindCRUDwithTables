let customerList = document.querySelector(".customerList")
let closeBtn=document.querySelector("#close-btn")
let modal=document.querySelector(".modal")
let addCompanyName=document.querySelector("#add-CompanyName")
let addContactName=document.querySelector("#add-ContactName")
let İd=[]
function getAllElements() {
    network.getAll('/customers')
        .then(data => {
            const sortName=data.sort((a,b)=> a.companyName.localeCompare(b.companyName))
            displayData(sortName)
        })

}
function displayData(data) {
    customerList.innerHTML=""
    data.forEach((element, id) => {
        customerList.innerHTML+= `
            <tr>
                <td>${element.companyName}</td>
                <td>${element.contactName}</td>
                <td>
                <button id="${element.id}" class="btn deleteBTN" >Delete</button> 
                <button id="${element.id}" class="btn updateBTN" id="${element.id}" >Update</button>
                </td>
            </tr>
            `
    })
    let deleteBTNs = document.querySelectorAll(".deleteBTN")
    deleteBTNs.forEach((deleteBTN) => {
        deleteBTN.addEventListener("click", function (e) {
            deleteInfo(deleteBTN.getAttribute("id"));
            this.closest("tr").remove();
        })
    })
    let updateBTNs=document.querySelectorAll(".updateBTN")
    updateBTNs.forEach((updateBTN)=>{
        updateBTN.addEventListener("click",function(){
            modal.classList.add("active")
            let companyname=updateBTN.parentElement.previousElementSibling.previousElementSibling.textContent
            let contactName=updateBTN.parentElement.previousElementSibling.textContent
            let id=updateBTN.getAttribute("id");
            updateUser(companyname,contactName,id)
            
        })
    })
}

function deleteInfo(id) {
    console.log(id)
    network.delete('/customers',id)
    createToast()
}


function createToast() {
  
        let text = `
        <div class="toast success-toast delete">
        <p class="message">Information deleted successfully</p>
        <i class="fa-solid fa-check checked"></i>
        </div>
        `
            toasts.innerHTML += text
            setTimeout(function () {
                let toast = document.querySelector(".toast")
                toast.remove()
            }, 3000)

}
getAllElements()


closeBtn.addEventListener("click",function(e){
    e.preventDefault()
    modal.classList.remove("active")
})

function updateUser(company,contact,id){
addCompanyName.value=company
addContactName.value=contact
closeBtn.addEventListener("click",function(e){
    let newName=addCompanyName.value
    let newContact=addContactName.value
    const newData={
        "companyName":newName,
        "contactName":newContact
    }
    e.preventDefault()
    modal.classList.remove("active")
    network.update("/customers",id,newData )
    .then((res)=>getAllElements()) 
})

}



