var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

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
  Campground.findById(req.params.id, function(err, foundCampground){
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
