const form = document.getElementById("form");
const username = document.getElementById("username")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("password1")
const email = document.getElementById("email");
const ctxt = document.querySelector(".context");
const minimum = document.querySelector("#context .minimum")
const upper = document.querySelector("#context .upper")
const lower = document.querySelector("#context .lower")
const numeric = document.querySelector("#context .numeric")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    Validate();
})

function setSuccess(input) {
    const formControl = input.parentElement
    formControl.className = "form_control success"
}
function setError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    small.textContent = message
    formControl.className = "form_control error"
}



function Validate() {
    // username
    if (username.value.trim() === '') {
        setError(username, "Username Cannot be blank")
    } else {
        setSuccess(username)
    }
    // email
    var regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (email.value.trim() === '') {
        setError(email, "Email cannot be blank")
    }
    else if (!email.value.match(regEmail)) {
        setError(email, "Enter correct Email")
    }
    else {
        setSuccess(email)
    }
    if (password.value.trim() == "") {
        setError(password, "Password cannot be blank")
    }
    //password
    if (password.value === "") {
        setError(password, "Password cannot be blank")
    }
    else if (flag) {
        setSuccess(password)
    } else {
        setError(password, '')
    }
    //confirm
    if (confirmPassword.value === '') {
        setError(confirmPassword, "Password cannot be blank")
    }
    else if (password.value !== confirmPassword.value) {
        console.log("does not match")
        setError(confirmPassword, 'Passsword does not match')
    } else {
        setSuccess(confirmPassword)
    }

}
//
password.onblur = function () {
    document.getElementById("context").style.display = "none"
}


password.onfocus = function () {
    document.getElementById("context").style.display = "block"
    if (setError) {
        formcontrol = document.getElementsByClassName("form_control")[1]
        formcontrol.classList.remove("error")
    }
}
var flag = false
password.onkeyup = function () {

    if (password.value.length >= 8) {
        minimum.style.color = '#2ecc71'
        flag = true
    } else {
        minimum.style.color = '#e74c3c'
        flag = false
    }
    if (password.value.match(/[A-Z]/g)) {
        upper.style.color = '#2ecc71'
        flag = true
    } else {
        upper.style.color = '#e74c3c'
        flag = false
    }
    if (password.value.match(/[a-z]/g)) {
        lower.style.color = '#2ecc71'
        flag = true
    } else {
        lower.style.color = '#e74c3c'
        flag = false
    }
    if (password.value.match(/[0-9]/g)) {
        numeric.style.color = '#2ecc71'
        flag = true
    } else {
        numeric.style.color = '#e74c3c'
        flag = false
    }
}