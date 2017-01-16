setCookie = function ( cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

getCookie = function ( cname ) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

checkCookie = function () {
    var user = getCookie("username");
    if (user != "") {
        // prompt("Why didn't you tell me that before?" , "")
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user);
        }
    }
}