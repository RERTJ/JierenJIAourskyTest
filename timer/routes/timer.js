var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
res.render('timer')
})

router.post('/', function(req, res, next) {
  var taskname = req.fields.newTask;
  res.redirect('managePage/?taskname='+taskname)
})

module.exports = router;
