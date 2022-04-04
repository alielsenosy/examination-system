var userNameinRes = document.getElementById("userNameinRes");
var userScoreinRes = document.getElementById("userScoreinRes");

var userNameinCookie = getCookie("firstName");
var useScoreinCookie = getCookie("result");

userNameinRes.innerText = userNameinCookie;
userScoreinRes.innerText = `${useScoreinCookie}%`;
