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

//INDEX Route
app.get('/campgrounds', function(req, res){
  // Get all campgrounds from the DB
  Campground.find({}, function(err, allCampgrounds) {
    if(err) {
      console.log(err);
    } else {
      res.render('index', {campgrounds: allCampgrounds});
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
  res.render('new');
});

//SHOW Route
app.get('/campgrounds/:id', function(req, res) {
  // Changed to populate comments first, then pass the entire DB object to Show
  Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
    if(err) {
      console.log(err);
    } else {
      res.render('show', {campground: foundCampground});
    }
  });
});

app.listen(3000, process.env.IP, function() {
  console.log('Server has started.');
});
