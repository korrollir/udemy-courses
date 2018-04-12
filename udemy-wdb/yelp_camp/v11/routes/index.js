var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

router.get('/', function(req, res){
  res.render('landing');
});

// Register form route
router.get('/register', function(req, res){
  res.render('register');
});

// Handle registration logic
router.post('/register', function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err) {
      // err will show the error from Mongoose/Passport
      req.flash('error', err.message);
      return res.render('register');
    }
    passport.authenticate('local')(req, res, function() {
      // user.username is coming directly from the database
      req.flash('success', 'Welcome to YelpCamp ' + user.username);
      res.redirect('/campgrounds');
    });
  });
});

// Login form route
router.get('/login', function(req, res) {
  res.render('login');
});

// Handles login logic
router.post('/login', passport.authenticate('local',
  {
    successRedirect: '/campgrounds',
    failureRedirect: '/login'
  }), function(req, res){
});

// Logout route
router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', 'Logged out');
  res.redirect('/campgrounds');
});

module.exports = router;
