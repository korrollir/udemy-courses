var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    // Campground Schema
    Campground  = require('./models/campground'),
    seedDB      = require('./seeds'),
    Comment     = require('./models/comment');

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

seedDB();

app.get('/', function(req, res){
  res.render('landing');
});

// ========================
// Campgrounds Routes
// ========================

//INDEX Route
app.get('/campgrounds', function(req, res){
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
app.post('/campgrounds', function(req, res){
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
app.get('/campgrounds/new', function(req, res){
  res.render('campgrounds/new');
});

//SHOW Route
app.get('/campgrounds/:id', function(req, res) {
  // Changed to populate comments first, then pass the entire DB object to Show
  Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
    if(err) {
      console.log(err);
    } else {
      res.render('campgrounds/show', {campground: foundCampground});
    }
  });
});

// ================================
// Comments Routes
// ================================

// New Route
app.get('/campgrounds/:id/comments/new', function(req, res){
  // Find campground by ID
  Campground.findById(req.params.id, function(err, campground){
    if(err) {
      console.log(err);
    } else {
      res.render('comments/new', {campground: campground});
    }
  });
});

// Post Route
app.post("/campgrounds/:id/comments", function(req, res){
  Campground.findById(req.params.id, function(err, campground){
    if(err) {
      console.log(err);
      res.redirect('/campgrounds');
    } else {
      Comment.create(req.body.comment, function(err, comment){
        if(err) {
          console.log(err);
        } else {
          // campgrounds refers to the passed-in var comment from .create
          campground.comments.push(comment);
          campground.save();
          res.redirect('/campgrounds/' + campground._id);
        }
      });
    }
  });
});

app.listen(3000, process.env.IP, function() {
  console.log('Server has started.');
});
