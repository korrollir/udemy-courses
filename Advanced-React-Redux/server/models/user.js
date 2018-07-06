const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the model
const userSchema = new Schema({
  // Ensures the email is unique to that user
  // Case is not enforced in MongoDB
  // Using lowercase will enforce the uniqueness
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// Create the model class that represents all users
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;