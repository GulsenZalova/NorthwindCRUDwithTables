const toasts = document.querySelector("#toasts")
const nameValue = document.querySelector("#add-name")
const descriptionValue = document.querySelector("#add-description")
const addBtn = document.querySelector("#add-btn")
const alertMessage = document.querySelector(".alertMessage")
console.log(nameValue.innerHTML, descriptionValue.innerHTML)

addBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const newData = {
        name: nameValue.value,
        desc: descriptionValue.value
    }
    network.add('/categories', newData)
        .then(data => {
            
            createToast()
            nameValue.value = ""
    descriptionValue.value = ""
        })
    console.log(newData)
})


function createToast() {
    if ((nameValue.value == "") && (descriptionValue.value == "")) {
        alertMessage.classList.add("active")
        setTimeout(function () {
            alertMessage.classList.remove("active")
        }, 3000)

    } else {
        let text = `
        <div class="toast success-toast">
        <p class="message">New information successfully added</p>
        <i class="fa-solid fa-check checked"></i>
        </div>
        `
            toasts.innerHTML += text
            setTimeout(function () {
                let toast = document.querySelector(".toast")
                toast.remove()
            }, 3000)
    }

}