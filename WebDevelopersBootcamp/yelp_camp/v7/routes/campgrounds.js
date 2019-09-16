var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');

//INDEX Route
router.get('/', function(req, res){
  // Get all campgrounds from the DB
  Campground.find({}, function(err, allCampgrounds) {
    if(err) {
      console.log(err);
    } else {
      res.render('campgrounds/index', {campgrounds: allCampgrounds});
    }
  });
});

//CREATE Route
router.post('/', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = {name: name, image: image, description: description};

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
router.get('/new', function(req, res){
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

module.exports = router;
