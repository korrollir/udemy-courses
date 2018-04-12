var mongoose = require('mongoose');

// POST - title, content
// Must come first in code to be used by User
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

// Similar to a return value in a function
module.exports = mongoose.model('Post', postSchema);
