var express = require('express');
var router = express.Router();
var Product = require('../models/product')
var Cart = require('../models/cart')

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find((err, foundProduct) => {
    res.render('main/index', { title: 'shopping cart', products: foundProduct });
  });
 });

router.get('/add-to-cart/:id', function(req, res) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  Product.findById(productId, (err, product) => {
    if(err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/');
  });

});
module.exports = router;
