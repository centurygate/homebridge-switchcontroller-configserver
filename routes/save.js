var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var configobj = JSON.parse(fs.readFileSync("D:/config.json"));
    //console.log("======contents of config.json in D:/config.json");
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
    fs.writeFileSync("D:/config.json",JSON.stringify(configobj,null,4));
    //res.writeHead(200,{'Content-Type':'application/json'});
    //res.end(JSON.stringify(configobj,null,4));
    res.redirect('/');
});

module.exports = router;