module.exports = function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    
    document.cookie = cname + "=" + cvalue + ";path=/";
}

module.exports = function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

module.exports = function checkCookie() {
    var user = getCookie("firstname")
    if (user != "") {

    } else {
        user = prompt("Please enter your first and last name:", "");
        if (user != "" && user != null) {
            setCookie("firstname", user, 365)
        }
    }
}