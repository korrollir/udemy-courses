var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo', {useMongoClient: true});
mongoose.Promise = global.Promise;
// POST - title, content
// Must come first in code to be used by User
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model('Post', postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  //Adds in the association
  posts: [postSchema]
});

var User = mongoose.model('User', userSchema);

User.findOne({name: 'Carter The Dude'}, function(err, user){
  if(err) {
    console.log(err);
  } else {
    user.posts.push({
      title: "Second post for me.",
      content: "Yay for posting!"
    });
    //Save post to the DB
    user.save(function(err, user) {
      if(err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
