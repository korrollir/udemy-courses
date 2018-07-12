const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// Middleware for authentication on the route
// Sets the jwt strategy and prevents the start of a cookie-based session
const requireAuth = passport.authenticate('jwt', { session: false });
// Local Strategy helper
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send( { 'hi': 'there'} );
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};