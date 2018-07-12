const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  // sub is for subject and points to who the token is for in jwt
  // iat = issued at time
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User email and password already auth'd
  // Supply token to the user object supplied by passport
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).sned({ error: 'You must provide an email and password.'});
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err) };
    // If a user with the email does exist, return an error
    if (existingUser) {
      // 422 - Unprocessable entity
      return res.status(422).send({ error: 'Email is in use' });
    }
    // If a user with the email does not exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });
    // Save the record to the database
    user.save(function(err) {
      if(err) { return next(err) };

      // Respond to request indicating the user was created
      res.json({
        token: tokenForUser(user)
      });
    });
  });
};