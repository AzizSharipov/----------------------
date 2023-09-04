let usersInputData = {};
const ordinaryClients = [];
let companyInputData = {};
const corporativeClients = [];
const popup = document.querySelector("#popup")
const popup2 = document.querySelector("#popup2")



function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}

function openPopup2() {
    popup2.classList.add("open-popup")
}

function closePopup2() {
    popup2.classList.remove("open-popup")
}


const nothingSuitableForm = document.querySelector("#nothingSuitableForm");
const corporativeClientForm = document.querySelector("#corporativeClientForm")

corporativeClientForm.addEventListener("submit", openPopup2)

// if (localStorage.getItem("userName") && localStorage.getItem("userNumber") && localStorage.getItem("userMessege")) {
//     document.querySelector("#ordinaryClientN").value = localStorage.getItem("userName") 
//     document.querySelector("#ordinaryClientT").value = localStorage.getItem("userNumber") 
//     document.querySelector("#ordinaryClientM").value = localStorage.getItem("userMessege") 
// }

// if (localStorage.getItem("companyOwner") && localStorage.getItem("companyNumber") && localStorage.getItem("companyMessege")) {
//     document.querySelector("#corporativeClientN").value = localStorage.getItem("companyOwner") 
//     document.querySelector("#corporativeClientT").value = localStorage.getItem("companyNumber") 
//     document.querySelector("#corporativeClientM").value = localStorage.getItem("companyMessege") 
// }

nothingSuitableForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let userName = document.querySelector("#ordinaryClientN").value;
    let userNumbers = document.querySelector("#ordinaryClientT").value;
    let userMessege = document.querySelector("#ordinaryClientM").value;
    if (userName && userNumbers && userMessege) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("userNumber", userNumbers);
        localStorage.setItem("userMessege", userMessege);
        usersInputData = {
            userName: localStorage.getItem("userName"),
            userNumber: localStorage.getItem("userNumber"),
            userMessege: localStorage.getItem("userMessege")
        }
        ordinaryClients.push(JSON.stringify(usersInputData))
        localStorage.setItem("ordinaryClients", ordinaryClients)
        openPopup()
        // alert("Your details are saved!")
    } else {
            alert("Please fill all spaces!!!")
        }
    })

corporativeClientForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let companyOwner = document.querySelector("#corporativeClientN").value;
    let companyNumbers = document.querySelector("#corporativeClientT").value;
    let companyMessege = document.querySelector("#corporativeClientM").value;
    if (companyOwner && companyNumbers && companyMessege) {
        localStorage.setItem("companyOwner", companyOwner);
        localStorage.setItem("companyNumber", companyNumbers);
        localStorage.setItem("companyMessege", companyMessege);
        companyInputData = {
            companyOwner: localStorage.getItem("companyOwner"),
            companyNumber: localStorage.getItem("companyNumber"),
            companyMessege: localStorage.getItem("companyMessege")
        }
        
        corporativeClients.push(JSON.stringify(companyInputData))
        localStorage.setItem("corporativeClients", corporativeClients)
        openPopup2()
    } else {
            alert("Please fill all spaces!!!")
        }
    })
