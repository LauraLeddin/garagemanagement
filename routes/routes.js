var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();

var Customer = require('../models/customer');
var Order = require('../models/order');

router.get('/customers', function(req, res, next){
  console.log('get customer');
  Customer.find()
  .limit(10)
  .sort({customernumberint: 1})
  .exec(function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

router.post('/sort', function(req, res, next){
  var sortlimit = req.body.sortlimit;
  var sortcriteria = req.body.sortcriteria;
  var sortorder = req.body.sortorder;
  var sortby = {};

  if(sortorder == "asc"){
    sortorder = 1;
  } else{
    sortorder = -1;
  }

  sortby[sortcriteria] = sortorder;

  Customer.find()
  .limit(sortlimit)
  .sort(sortby)
  .exec(function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

router.post('/customers', function(req, res, next){

});