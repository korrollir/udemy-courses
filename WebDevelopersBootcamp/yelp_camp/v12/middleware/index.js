// Needed so that Campground and Comment are defined.
var Campground = require('../models/campground');
var Comment = require('../models/comment');

// Middleware for the app
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  // Run flash prior to redirecting, gives access to show message on next request
  req.flash('error', 'You must be logged in');
  res.redirect('/login');
}

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
  if(req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, foundCampground){
      if(err) {
        req.flash('error', 'Campground not found');
        res.redirect('back');
      } else {
        if(foundCampground.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You don\'t have permission to do that');
          res.redirect('back');
        }
      }
    });
  } else {
    req.flash('error', 'You must be logged in');
    res.redirect('back');
  }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
  if(req.isAuthenticated ) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
      if(err) {
        res.redirect('back');
      } else {
        // Must use .equals() instead of ===, because it is a mongoose id
        // String vs object comparison otherwise
        if(foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You don\'t have perimssion');
          res.redirect('back');
        }
      }
    });
  } else {
    req.flash('error', 'You need to be logged in');
    res.redirect('back');
  }
}

module.exports = middlewareObj;
