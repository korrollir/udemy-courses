var express       = require('express'),
    app           = express(),
    bodyParser    = require('body-parser'),
    mongoose      = require('mongoose'),
    passport      = require('passport'),
    LocalStrategy = require('passport-local'),
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
  next();
});

app.use('/', indexRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);

app.listen(3000, process.env.IP, function() {
  console.log('Server has started.');
});
