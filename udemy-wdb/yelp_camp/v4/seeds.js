var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
  {
    name: 'Stinky Hole',
    image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/P98QR512UT.jpg',
    description: 'Get together and enjoy the outdoors.'
  },
  {
    name: 'Jack\'s Hideaway',
    image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/07HR64IOMI.jpg',
    description: 'Fun in the sun and water.  Perfect for water babies.'
  },
  {
    name: 'Jazzy\'s Spazzy Spot',
    image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/CADPJRFJNZ.jpg',
    description: 'The perfect spot to be as free as you want to be.'
  },
  {
    name: 'Parent\'s Retreat',
    image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/JYTXN7PS1M.jpg',
    description: 'For when you need to get away from it all and breathe.'
  }
];

function seedDB() {
  // Remove all campgrounds
  Campground.remove({}, function(err){
    if(err) {
      console.log(err);
    }
    console.log('Removed campgrounds');
    // Add a few campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err) {
          console.log(err);
        } else {
          console.log('Added a campground');
          // Create a comment on each campground
          Comment.create(
            {
              text: 'This place is great!',
              author: 'Mommy'
            }, function(err, comment) {
              if(err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log('Comment added');
              }
            }
          );
        }
      });
    });
  });

}



module.exports = seedDB;
