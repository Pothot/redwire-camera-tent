if ((read_cookie("cookie_allowed") === "Value not found!") || (read_cookie("cookie_allowed") != "true")) {
    var cookie_dialog = document.getElementById("cookie-request");
    cookie_dialog.setAttribute("style", "visibility: visible;");
    var okButton = document.getElementById("cookie-ok-button");
    okButton.addEventListener("click", cookies_ok_pressed);
}
function create_cookie(cookie_name, cookie_value, cookie_houres_to_expire) {
    var cookie_exp_date = new Date();
    cookie_exp_date.setTime(cookie_exp_date.getTime() + (cookie_houres_to_expire * 60 * 60 * 1000));
    document.cookie = cookie_name + '=' + cookie_value + '; expires=' + cookie_exp_date + ';';
}
function read_cookie(required_cookie_name) {
    var all_cookies_array = document.cookie.split(';');
    for (var i = 0; i < all_cookies_array.length; i++) {
        var current_cookie = all_cookies_array[i];
        while (current_cookie.charAt(0) === ' ') {
            current_cookie = current_cookie.substring(1);
        }
        if (current_cookie.indexOf(required_cookie_name) === 0) {
            return current_cookie.substring(required_cookie_name.length + 1, current_cookie.length);
        }
    }
    return "Value not found!";
}
function cookies_ok_pressed() {
    create_cookie("cookie_allowed", true, 24);
    okButton.removeEventListener("click", cookies_ok_pressed);
    cookie_dialog.setAttribute("style", "visibility: hidden;");
}


var letterRW = document.getElementsByClassName('letter-rw');
var letterWebDev = document.getElementsByClassName('letter-web-dev');
var letterDesign = document.getElementsByClassName('letter-design');
var letterFoto = document.getElementsByClassName('letter-foto');

if (sessionStorage.getItem("letterRevealed")) {
    replaceAllMails();
} else {
    for (i = 0; i < letterRW.length; i++) {
        letterRW[i].addEventListener("click", replaceAllMails);
    }
    for (i = 0; i < letterWebDev.length; i++) {
        letterWebDev[i].addEventListener("click", replaceAllMails);
    }
    for (i = 0; i < letterDesign.length; i++) {
        letterDesign[i].addEventListener("click", replaceAllMails);
    }
    for (i = 0; i < letterFoto.length; i++) {
        letterFoto[i].addEventListener("click", replaceAllMails);
    }
}
function replaceAllMails(event) {
    for (i = 0; i < letterRW.length; i++)
        replaceMail(letterRW[i]);
    for (i = 0; i < letterWebDev.length; i++)
        replaceMail(letterWebDev[i]);
    for (i = 0; i < letterDesign.length; i++)
        replaceMail(letterDesign[i]);
    for (i = 0; i < letterFoto.length; i++)
        replaceMail(letterFoto[i]);
    if (!sessionStorage.getItem("letterRevealed"))
        event.preventDefault();
    sessionStorage.setItem("letterRevealed", true);
}
function replaceMail(hiddenLetter) {
    if (hiddenLetter.classList.contains("letter-rw")) {
        var y = decode("znvygb:bssvpr@erqjver.ng");
        var u = String.fromCharCode(111, 102, 102) + "ice";
        var arr = "@";
        var d = "red" + String.fromCharCode(119, 105, 114, 101);
        var dot = ".";
        var count = String.fromCharCode(97, 116);
    }
    if (hiddenLetter.classList.contains("letter-web-dev")) {
        var y = decode("znvygb:nggbcs@tznvy.pbz");
        var u = String.fromCharCode(97, 116, 116, 111) + "pf";
        var arr = "@";
        var d = "gm" + String.fromCharCode(97, 105, 108);
        var dot = ".";
        var count = String.fromCharCode(99, 111, 109);
    }


    if (hiddenLetter.classList.contains("letter-design")) {
        var y = decode("znvygb:r.fpuanvgg@tznvy.pbz");
        var u = "e." + String.fromCharCode(115, 99, 104, 110, 97, 105, 116, 116);
        var arr = "@";
        var d = "gm" + String.fromCharCode(97, 105, 108);
        var dot = ".";
        var count = String.fromCharCode(99, 111, 109);
    }
    

    if (hiddenLetter.classList.contains("letter-foto")) {
        var y = decode("znvygb:bssvpr@qjcubgb.ng");
        var u = "o" + String.fromCharCode(102, 102, 105, 99, 101);
        var arr = "@";
        var d = "dwp" + String.fromCharCode(104, 111, 116, 111);
        var dot = ".";
        var count = String.fromCharCode(97, 116);
    }




    hiddenLetter.setAttribute("href", y);
    hiddenLetter.firstChild.nodeValue = u + arr + d + dot + count;
    hiddenLetter.removeEventListener("click", replaceMail);
}
function decode(a) {
    return a.replace(/[a-zA-Z]/g, function(c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    })
}
;