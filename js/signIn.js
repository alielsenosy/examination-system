var emailAddress = getCookie("emailAddress");
var password = getCookie("password");

var loginEmail = document.getElementById("loginEmail")
var loginPassword = document.getElementById("loginPassword")


function login() {

    var isinvalid = false;

    if (emailAddress != loginEmail.value || loginEmail.value == "") {
        loginEmailContent.classList.add("invalid");
        loginEmail.nextElementSibling.innerHTML = "your email does not exist";
        isinvalid = true;
    } else loginEmailContent.classList.remove("invalid");

    if (password != loginPassword.value || loginPassword.value == "") {
        loginPasswordContent.classList.add("invalid");
        loginPassword.nextElementSibling.innerHTML = "your email does not exist";
        isinvalid = true;
    } else loginPasswordContent.classList.remove("invalid");

    if (isinvalid == false) {
        window.location.replace("../pages/exam.html")
    }
}

