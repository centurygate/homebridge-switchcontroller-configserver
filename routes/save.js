var express = require('express');
var fs = require('fs');
var router = express.Router();
var configpath = "/root/.homebridge/config.json";
var process = require('child_process');
/* GET users listing. */
router.post('/', function(req, res, next) {
    var configobj = JSON.parse(fs.readFileSync("D:/config.json"));
    configobj['accessories'] = configobj['accessories']||[];
    console.log("======contents of config.json in "+configpath);
    console.log(JSON.stringify(req.body));
    //wirte eight channels for the switch controller
    for(var i = 0; i < 8; i++)
    {
        var suffix_name = "";
        if(i <4)
        {
            suffix_name = "-switch";
        }
        else{
            suffix_name = "-brightness";
        }
        configobj["accessories"][i]=
        {
            "accessory": "HomebridgeSwitchController-chan"+(i+1),
            "name": "gp"+req.body.GROUP+"-chan"+(i+1)+suffix_name,
            "PORT": req.body.PORT,
            "HOST": req.body.HOST,
            "GROUP": req.body.GROUP
        }
    }
    console.log("Will Write Contents as below to config.json .....................................");
    console.log(JSON.stringify(configobj,null,4));
    fs.writeFileSync("D:/config.json",JSON.stringify(configobj,null,4));
    process.exec('reboot -f',function(err, stdout, stderr){
        console.log(stdout);
      });
    //res.writeHead(200,{'Content-Type':'application/json'});
    //res.end(JSON.stringify(configobj,null,4));
    res.redirect('/');
});

//添加这个代码是为了解决 向 /save  url post 过后经过 save.js 的router.post('/',function(req,res,next){... res.redirect('/'); })处理过后 浏览器地址栏并没有显示为
// http://localhost:3000 的样子,而是显示为了http://localhost:3000/save 的样子,因此 如果服务器重启后浏览器重新刷新则默认是 get http://localhost:3000/save, 而如果没有
//如下的get处理 会导致浏览器找不到对应的资源,因此这里重新将http://localhost:3000/save 重定向到http://localhost:3000
router.get('/', function(req, res, next) {
    res.redirect('/');
});


module.exports = router;