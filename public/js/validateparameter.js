function isValidIP(ip) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return reg.test(ip);
}
function isValidPort(str)  
{  
    var parten=/^(\d)+$/g;  
    if(parten.test(str)&&parseInt(str)<=65535&&parseInt(str)>=0){  
        return true;  
     }else{  
        return false;  
     }   
}
function isValidGroup(str)  
{  
    var parten=/^(\d)+$/g;  
    if(parten.test(str)&&parseInt(str)<=15&&parseInt(str)>=1){  
        return true;  
     }else{  
        return false;  
     }   
}
