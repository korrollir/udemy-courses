var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    passport    = require('passport'),
    LocalStrategy = require('passport-local'),
    // Campground Schema
    Campground  = require('./models/campground'),
    seedDB      = require('./seeds'),
    User        = require('./models/user'),
    Comment     = require('./models/comment');

// Requiring routes
var commentRoutes     = require('./routes/comments');
    campgroundRoutes  = require('./routes/campgrounds'),
    authRoutes        = require('./routes/index');

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));  // Add in access to stylesheets and js files

seedDB();

// Passport configuration
app.use(require('express-session')({
  secret: 'Camping is fun any time',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Add currentUser middleware to routes to determine if navbar shows Login, Sign Up, logout
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

app.use('/', indexRoutes);
// Reduces need to have these routes in front of each route in the route config
app.use('/campgrounds/:id/comments', commentRoutes);
app.use('/campgrounds', campgroundRoutes);


app.listen(3000, process.env.IP, function() {
  console.log('Server has started.');
});
