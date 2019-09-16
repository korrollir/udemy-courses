var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');
// Will automatically load index.js, because an index file is automatically loaded
// when a directory is required
var middleware = require('../middleware');

//INDEX Route
router.get('/', function(req, res){
  // Get all campgrounds from the DB
  Campground.find({}, function(err, allCampgrounds) {
    if(err) {
      console.log(err);
    } else {
      res.render('campgrounds/index', {campgrounds: allCampgrounds, page: 'campgrounds'});
    }
  });
});

//CREATE Route
router.post('/', middleware.isLoggedIn, function(req, res){
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var description = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newCampground = {name: name, price: price, image: image, description: description, author: author};

  Campground.create(newCampground, function(err, newCampground) {
      if (err) {
        console.log(err);
      } else {
        console.log('Newly created campground: ');
        console.log(newCampground);
      }
    });
  res.redirect('/campgrounds');
});

//NEW Route
router.get('/new', middleware.isLoggedIn, function(req, res){
  res.render('campgrounds/new');
});

//SHOW Route
router.get('/:id', function(req, res) {
  // Changed to populate comments first, then pass the entire DB object to Show
  Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
    if(err) {
      console.log(err);
    } else {
      res.render('campgrounds/show', {campground: foundCampground});
    }
  });
});

// EDIT Campground Route
router.get('/:id/edit', middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findById(req.params.id, function(err, foundCampground) {
    res.render('campgrounds/edit', {campground: foundCampground});
  });
});

// UPDATE Campground Route
router.put('/:id', middleware.checkCampgroundOwnership, function(req, res) {
  // Find and update the correct campground then redirect to show page
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
    res.redirect('/campgrounds/' + req.params.id);
  });
});

// DESTROY Campground Route
router.delete('/:id', middleware.checkCampgroundOwnership, function(req, res) {
  // Find and delete the correct campground then redirect to show page
  Campground.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/campgrounds');
  });
});

module.exports = router;
