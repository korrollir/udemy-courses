var express               = require('express');
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    bodyParser            = require('body-parser'),
    LocalStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User                  = require('./models/user');

mongoose.connect('mongodb://localhost/auth_demo_app', {useMongoClient: true});
mongoose.Promise = global.Promise;

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
    // Phrase used to encode and decode sessions
    secret: 'Jack attack is back',
    resave: false,
    saveUninitialized: false
}));
// Sets up Passport to be used by the app
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
// Responsible for reading session, taking encoded data, and unencoding it
// And vice versa between them.  passport-local-mongoose responsible for the
// methods.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ====================
// Routes
// ====================
app.get('/', function(req, res){
  res.render('home');
});

app.get('/secret', isLoggedIn, function(req, res){
  res.render('secret');
});

// Auth routes
// Show sign up form
app.get('/register', function(req, res){
  res.render('register');
});
// Handle user sign up
app.post('/register', function(req, res){
  // Adds new User to DB then hashes the password into an encrypted string and stores into DB
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err) {
      console.log(err);
      res.render('register');
    } else {
      // Will log the user in, authenticate, serialize user method, and uses 'local' strategy
      passport.authenticate('local')(req, res, function(){
        res.redirect('secret');
      });
    }
  });
});

// Login Routes
// Render login form
app.get('/login', function(req, res){
  res.render('login');
});

// Login logic
// passport.authenticate is used as middleware in this instance
// Authentication occurs before the callback is completed
app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login'
}), function(req, res){
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// Middleware to determine if a User is actually logged in
function isLoggedIn(req, res, next) {
  // Method of passport
  if(req.isAuthenticated()) {
    //next() refers to the following callback function in the caller
    return next();
  }
  res.redirect('/login');
}

app.listen(3000, process.env.IP, function(){
  console.log('Server started.');
});
