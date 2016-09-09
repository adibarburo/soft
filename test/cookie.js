function createCookie(name, value, expiresdays, path, domain){
	
	var d = new Date();
    d.setTime(d.getTime() + (expiresdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
	
    document.cookie= name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    (( path ) ? "; path=" + path : "" ) +
	((domain) ? "; domain=" + domain : "");
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires; 
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function checkCookie() {
    var cookies=getCookie("cookieconsent_dismissed");
    if (cookies == "") {     
	document.getElementById('eucookies').style.display = 'block';
    }
}

function allowCookies() {
    createCookie("cookieconsent_dismissed", "y", 365, "/", "softlab.adibarbu.ro");
	document.getElementById('eucookies').style.display = "none";
}


function test() {
alert("Hello! I am an alert box!!");
// multiple function calls in JS  = onload="checkCookie();test();"
}
