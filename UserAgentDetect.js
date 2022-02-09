    function detectUa() { 
    if(navigator.userAgent.indexOf("Nintendo Wii") != -1 ) // Wii
    {
        return "Wii"
    }
    else if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) // Opera
    {
        return "Opera";
    }
    else if(navigator.userAgent.indexOf("Edg") != -1 ) // Edge
    {
        return "Edge";
    }
    else if(navigator.userAgent.indexOf("YaBrowser") != -1 ) // Chrome
    {
        return "Yandex";
    }
    else if(navigator.userAgent.indexOf("Lynx") != -1 ) // Chrome
    {
        return "Lynx";
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 ) // Chrome
    {
        return "Chrome";
    }
    else if(navigator.userAgent.indexOf("Safari") != -1) // Safari
    {
        return "Safari";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) // Firefox
    {
        return "Firefox";
    }
    else if(navigator.userAgent.indexOf("PLAYSTATION") != -1 ) // Playstation
    {
        return "Playstation"
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) // IE
    {
      return "Internet Explorer";
    }  
    else // Others
    {
       return "Other";
    }
    }
