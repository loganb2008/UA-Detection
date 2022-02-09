    function detectUa(ua) { 
if(ua == "" || ua == undefined || ua == null) {
ua = navigator.userAgent;
}
    if(ua.indexOf("Nintendo WiiU") != -1 ) // Wii
    {
        return "Wii U"
    }
    if(ua.indexOf("Nintendo DSi") != -1 ) // Wii
    {
        return "DSi"
    }
    if(ua.indexOf("Nintendo 3DS") != -1 ) // Wii
    {
        return "3DS"
    }
    if(ua.indexOf("Vita") != -1 ) // Wii
    {
        return "PSVita"
    }
    if(ua.indexOf("Nintendo Wii") != -1 ) // Wii
    {
        return "Wii"
    }
    else if((ua.indexOf("Opera") || ua.indexOf('OPR')) != -1 ) // Opera
    {
        return "Opera";
    }
    else if(ua.indexOf("Edg") != -1 ) // Edge
    {
        return "Edge";
    }
    else if(ua.indexOf("MQQBrowser") != -1 ) // Chrome
    {
        return "QQ";
    }
    else if(ua.indexOf("Maxthon") != -1 ) // Chrome
    {
        return "Maxthon";
    }
    else if(ua.indexOf("YaBrowser") != -1 ) // Chrome
    {
        return "Yandex";
    }
    else if(ua.indexOf("Lynx") != -1 ) // Chrome
    {
        return "Lynx";
    }
    else if(ua.indexOf("Chrome") != -1 ) // Chrome
    {
        return "Chrome";
    }
    else if(ua.indexOf("Safari") != -1) // Safari
    {
        return "Safari";
    }
    else if(ua.indexOf("Firefox") != -1 ) // Firefox
    {
        return "Firefox";
    }
    else if(ua.indexOf("PLAYSTATION") != -1 ) // Playstation
    {
        return "Playstation"
    }
    else if((ua.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) // IE
    {
      return "Internet Explorer";
    }  
    else // Others
    {
       return "Other";
    }
    }
function getiOSVersion(ua) {
i = ua.indexOf("OS") + 3;
c = ua.at(i);
b = "";
do {
c = ua.at(i);
c = c.replace("_", ".");
b = b + c;
i+=1;
}
while(c !== " ");
b = b.replace(" ", "");
return b;
}
