var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var emailAddress = document.getElementById("emailAddress");
var password = document.getElementById("password");
var reEnterPassword = document.getElementById("reEnterPassword");

var firstNameContent = document.getElementById("firstNameContent");
var lastNameContent = document.getElementById("lastNameContent");
var emailAddressContent = document.getElementById("emailAddressContent");
var passwordContent = document.getElementById("passwordContent");
var reEnterPasswordContent = document.getElementById("reEnterPasswordContent");

var emailRegx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var passwordRegx = /^(?=.*?[0-9]).{8,}$/;
var userRegx = /^(?=.*[a-z])(?=.*[A-Z]).{1,}$/;

function submit() {
    var isinvalid = false;

    if (!userRegx.test(firstName.value) || firstName.value == "") {
        firstNameContent.classList.add("invalid");
        firstName.nextElementSibling.innerHTML = "please enter Your name";
        isinvalid = true;
    } else firstNameContent.classList.remove("invalid");

    if (!userRegx.test(lastName.value) || lastName.value == "") {
        lastNameContent.classList.add("invalid");
        lastName.nextElementSibling.innerHTML = "please enter Your Last name";
        isinvalid = true;
    } else lastNameContent.classList.remove("invalid");

    if (!emailRegx.test(emailAddress.value) || emailAddress.value == "") {
        emailAddressContent.classList.add("invalid");
        emailAddress.nextElementSibling.innerHTML = "please enter valid email";
        isinvalid = true;
    } else emailAddressContent.classList.remove("invalid");

    if (!passwordRegx.test(password.value) || password.value == "") {
        passwordContent.classList.add("invalid");
        password.nextElementSibling.innerHTML = "please enter Your password";
        isinvalid = true;
    } else passwordContent.classList.remove("invalid");

    if (reEnterPassword.value == "" || reEnterPassword.value != password.value) {
        reEnterPasswordContent.classList.add("invalid");
        reEnterPassword.nextElementSibling.innerHTML = "please enter Your reEnterPassword";
        isinvalid = true;
    } else reEnterPasswordContent.classList.remove("invalid");

    if (isinvalid == false) {
        setCookie("firstName", firstName.value);
        setCookie("lastName", lastName.value);
        setCookie("emailAddress", emailAddress.value);
        setCookie("password", password.value);
        window.location.replace("pages/signIn.html")
    }
}
