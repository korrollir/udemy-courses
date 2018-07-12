const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
// Strategy is the method of authenticating a user, jwt in this case
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// Authentication with only email and password
const LocalStrategy = require('passport-local');

// Create local strategy for the case when user is signing in
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify email and password, call done with the user
  // if it is the correct email and password
  // Otherwise, call done with false
  User.findOne({ email: email }, function(err, user) {
    if (err) { return done(err); }

    if (!user) { return done(null, false); }
    // Compare passwords by hashing the user supplied password at sign in
    // Method from the user model
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }

      if (!isMatch) { return done(null, false); }

      return done(null, user);
    });
  });
});

// Setup options for JWT Strategy for when the user is making an authorized request
const jwtOptions = {
  // Tell JWT where to look for the token
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // Tell JWT where to find the secret for the token
  secretOrKey: config.secret
};

// Create JWT Strategy
// payload is the decoded jwt token re: user.id in the jwt.encode({ sub: user.id, iat: timestamp }) 
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in the database
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }
    // If a user exists, call 'done' with the user object
    if (user) {
      done(null, user);
    // Otherwise, call 'done' with an empty object
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);