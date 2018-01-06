var express = require('express');
var router = express.Router();
var Product = require('../models/product')

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find((err, foundProduct) => {
    res.render('main/index', { title: 'shopping cart', products: foundProduct });
  });
 });

module.exports = router;
