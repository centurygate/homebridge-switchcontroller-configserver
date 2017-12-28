var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  var configobj = JSON.parse(fs.readFileSync("D:/config.json"));
  res.render('index', { title: '设备配置',configobj: configobj });
});

module.exports = router;
