var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Product = require('../models/product');
var Order = require('../models/order');

/* GET home page. */
router.get('/', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var products = Product.find(function(err, docs){
    var productChunks = [];
    let chunkSize = 3;
    for (var i=0; i<docs.length; i+=chunkSize) {
      productChunks.push(docs.slice(i, i+chunkSize));
    }
    res.render('shop/index', { title: 'ExpressCart', products: productChunks, successMsg: successMsg});
  });
 
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');

  });

});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});


router.get('/shopping-cart', function(req, res, next) {
  if (!(req.session.cart)){
    return res.render("shop/shopping-cart", { title: 'My Shopping Cart', products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render("shop/shopping-cart", {title: 'My Shopping Cart', products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', isLoggedIn, function(req, res, next){
  if (!req.session.cart){
    return res.redirect("shop/shopping-cart");
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render("shop/checkout", { title: 'Checkout', total: cart.totalPrice, errMsg: errMsg});

});

router.post('/checkout', isLoggedIn, function (req, res, next){
  if (!req.session.cart){
    return res.redirect("shop/shopping-cart");
  }
  var cart = new Cart(req.session.cart);

  var stripe = require("stripe")("sk_test_dGXjOS7k0HEfGWevEqBmsYuX");

  stripe.charges.create({
    amount: cart.totalPrice * 100,
    currency: "cad",
    source: req.body.stripeToken, // obtained with Stripe.js
    description: "Test Charge"
  }, function(err, charge) {
    // asynchronously called
    if (err){
      req.flash('error', err.message);
      return res.redirect('/checkout', {errMsg: err.message});
    }
    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
      paymentId: charge.id
    });
    order.save(function(err, result) {
      req.flash('success', "Successfully Purchased! ");
      req.session.cart = null;
      res.redirect('/');
    });
    
  });
});
module.exports = router;

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect("/user/signin");
}

// this is a test
