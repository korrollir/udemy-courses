var mongoose = require('mongoose');

// Add in modularity with models, which cleans up code and add reusability
// through modularity
var Post = require('./models/post');
var User = require('./models/user');

mongoose.connect('mongodb://localhost/blog_demo_2', {useMongoClient: true});
mongoose.Promise = global.Promise;

// User.create({
//   email: 'TheDude@pineapple.com',
//   name: 'The Big Lebowski'
// });

// Create a new post and push it to the User object and then save
// Post.create({
//   title: 'How to type furiously while following a tutorial, pt. 4',
//   content: 'And now we\'ve partly modularized!'
// }, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     User.findOne({email: 'TheDude@pineapple.com'}, function(err, foundUser){
//       if(err) {
//         console.log(err);
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save(function(err, data) {
//           if(err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

//Find User and all posts for that User
// .populate looks up all object ids and posts and sticks them in posts Array
// .exec starts the query
User.findOne({email: 'TheDude@pineapple.com'}).populate('posts').exec(function(err, user){
  if(err) {
    console.log(err);
  } else {
    console.log(user);
  }
});
