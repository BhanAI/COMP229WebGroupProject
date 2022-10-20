/*File Name: user.js   Student: Betty Han    Student ID:301202325   Date: 2022.10.20*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('placeholder');
});

module.exports = router;
