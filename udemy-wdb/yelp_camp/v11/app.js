var express       = require('express'),
    app           = express(),
    bodyParser    = require('body-parser'),
    mongoose      = require('mongoose'),
    // Provides messages in response to authentication and authorization and handles errors
    // Handle in templates and routes
    // Must come before passport
    flash         = require('connect-flash'),
    // Authorization and authentication
    passport      = require('passport'),
    LocalStrategy = require('passport-local'),
    // Allows use of PUT and DELETE routes
    methodOverride = require('method-override'),
    seedDB        = require('./seeds'),
    Campground    = require('./models/campground'),
    User          = require('./models/user'),
    Comment       = require('./models/comment');

// Requring routes
var commentRoutes    = require('./routes/comments'),
    campgroundRoutes = require('./routes/campgrounds'),
    indexRoutes      = require('./routes/index')

// Mongoose setup
mongoose.connect('mongodb://localhost/yelp_camp', {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));  // Add in access to stylesheets and js files
app.use(methodOverride('_method'));
// Express-session handles cookieparser and such normally used in flash
app.use(flash());

// seedDB(); // seed the database

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
// Makes currentUser available to every view
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  // Allows flash to be passed to all templates through the header partial
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

// Setting defaults for each route to shorten route calls
app.use('/', indexRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);

app.listen(3000, process.env.IP, function() {
  console.log('Server has started.');
});
