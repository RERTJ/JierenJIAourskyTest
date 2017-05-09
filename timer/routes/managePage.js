var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
  var taskname = req.fields.myTask;
  res.render('managePage')
})

module.exports = router;
