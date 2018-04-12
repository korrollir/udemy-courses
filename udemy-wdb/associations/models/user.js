var mongoose = require('mongoose');

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  //Array of Object Ids belonging to posts
  posts: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
