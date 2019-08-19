// JavaScript Document
function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires="+d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
         }
        if (c.indexOf(name)  == 0) {
            return c.substring(name.length, c.length)
         }
    }
    return ""
}

function checkCookie() {

    var cookie_cc = new Array()
    var user = getCookie("username")

    console.log(getCookie("bac_blur"))
    console.log(getCookie("bac_warpe"))
    console.log(getCookie("username"))


    if (user != "") {
        console.log("欢迎回来"+user)
        cookie_cc[0] = getCookie("bac_blur")
        cookie_cc[1] = getCookie("bac_warpe")
    } else {
        user = prompt("创建一个新的用户（Cookie！）", "")
        if (user != "" && user != null) {
            setCookie("username", user, 365)
            setCookie("bac_blur","false",365)
            setCookie("bac_warpe","false",365)
            setCookie("sreche_from","baidu",365)
        }
    }
    return cookie_cc
}
function checkCookie_c() {
    /* cookie_cc:>> 0:'bac_blur' 1:'bac_warpe' 2:'sreche_from' */
    var cookie_cc = checkCookie()

    if(cookie_cc[0] == 'true'){ $("#filter_colro img").css("filter","blur(5px)"),$(".bg").css("filter","blur(5px)") } else{ $("#filter_colro img").css("filter","blur(0px)") }
    if(cookie_cc[1] == 'true'){ Page(true) } else{ Page(false) }
}
