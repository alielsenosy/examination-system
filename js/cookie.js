var value = "not found";
var cooki = document.cookie;
var arr = cooki.split(";");

function getCookie(key) {
  for (var i = 0; i < arr.length; i++) {
    var arrKeyValue = arr[i].split("=");
    if (arrKeyValue[0].trim() === key) {
      return arrKeyValue[1];
    }
  }
  return null;
}

function setCookie(key, value) {
  if (!key || value === undefined) {
    throw `you should add both key and value.`;
  }


  var date = new Date("1/1/2050");
  document.cookie = `${key}=${value};expires=${date}`;
  return `${key}: ${value}`;
}

function deletCookie(key) {
  var date = new Date(2 / 1 / 2008);
  setCookie(key, "", date);
  return `${key} is deleted`;
}

function allCookieList() {
  return document.cookie;
}

function hasCookie(key) {
  for (var i = 0; i < arr.length; i++) {
    var arrKeyValue = arr[i].split("=");
    if (arrKeyValue[0].trim() === key) {
      return arrKeyValue;
    }
  }
  throw `Your Key does not exist`;
}
