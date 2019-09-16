var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
  {
    name: 'Stinky Hole',
    image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/P98QR512UT.jpg',
    description: 'Lucas ipsum dolor sit amet sarn aka letaki dooku zev tatooine cadavine umbaran lars tambor. Bail raa obi-wan neimoidian moff vilim joelle. Nassau boba vader jabiimas teneniel. Jettster luke san cato dunhausen anx kashyyyk ubb. Lars yoda dagobah anomid wedge geonosian grodin jade. Vaathkree terrik zev castell nikto kessel sidious. Iv myneyrsh ablajeck tatooine cade calamari fisto. Hutt reach padmé coruscant hutt ti. Isard jodo hutt kobok calamari padmé. Zann malastare tharen aleena halla. Zev kashyyyk rugor miraluka bimm zabrak nunb kir sern.'
  },
  {
    name: 'Jack\'s Hideaway',
    image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/07HR64IOMI.jpg',
    description: 'Lucas ipsum dolor sit amet sarn aka letaki dooku zev tatooine cadavine umbaran lars tambor. Bail raa obi-wan neimoidian moff vilim joelle. Nassau boba vader jabiimas teneniel. Jettster luke san cato dunhausen anx kashyyyk ubb. Lars yoda dagobah anomid wedge geonosian grodin jade. Vaathkree terrik zev castell nikto kessel sidious. Iv myneyrsh ablajeck tatooine cade calamari fisto. Hutt reach padmé coruscant hutt ti. Isard jodo hutt kobok calamari padmé. Zann malastare tharen aleena halla. Zev kashyyyk rugor miraluka bimm zabrak nunb kir sern.'
  },
  {
    name: 'Jazzy\'s Spazzy Spot',
    image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/CADPJRFJNZ.jpg',
    description: 'Lucas ipsum dolor sit amet sarn aka letaki dooku zev tatooine cadavine umbaran lars tambor. Bail raa obi-wan neimoidian moff vilim joelle. Nassau boba vader jabiimas teneniel. Jettster luke san cato dunhausen anx kashyyyk ubb. Lars yoda dagobah anomid wedge geonosian grodin jade. Vaathkree terrik zev castell nikto kessel sidious. Iv myneyrsh ablajeck tatooine cade calamari fisto. Hutt reach padmé coruscant hutt ti. Isard jodo hutt kobok calamari padmé. Zann malastare tharen aleena halla. Zev kashyyyk rugor miraluka bimm zabrak nunb kir sern.'
  },
  {
    name: 'Parent\'s Retreat',
    image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/JYTXN7PS1M.jpg',
    description: 'Lucas ipsum dolor sit amet sarn aka letaki dooku zev tatooine cadavine umbaran lars tambor. Bail raa obi-wan neimoidian moff vilim joelle. Nassau boba vader jabiimas teneniel. Jettster luke san cato dunhausen anx kashyyyk ubb. Lars yoda dagobah anomid wedge geonosian grodin jade. Vaathkree terrik zev castell nikto kessel sidious. Iv myneyrsh ablajeck tatooine cade calamari fisto. Hutt reach padmé coruscant hutt ti. Isard jodo hutt kobok calamari padmé. Zann malastare tharen aleena halla. Zev kashyyyk rugor miraluka bimm zabrak nunb kir sern.'
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
