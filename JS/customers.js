let customerList = document.querySelector(".customerList")
function getAllElements() {
    network.getAll('/customers')
        .then(data => {
            console.log(data)
            const sortName=data.sort((a,b)=> a.companyName.localeCompare(b.companyName))
            displayData(sortName)
        })

}

function displayData(data) {
    data.forEach((element, id) => {
        customerList.innerHTML+= `
            <tr>
                <td>${element.companyName}</td>
                <td>${element.contactName}</td>
                <td ><button id="${element.id}"  class="deleteBTN" >Delete</button></td>
            </tr>
            `
        //  customerList.innerHTML+=newData

    })
    let deleteBTNs = document.querySelectorAll(".deleteBTN")
    deleteBTNs.forEach((deleteBTN) => {
        deleteBTN.addEventListener("click", function (e) {
            deleteInfo(deleteBTN.getAttribute("id"));
            this.closest("tr").remove();
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