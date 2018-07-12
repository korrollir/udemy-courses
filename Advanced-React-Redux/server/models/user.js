const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define the model
const userSchema = new Schema({
  // Ensures the email is unique to that user
  // Case is not enforced in MongoDB
  // Using lowercase will enforce the uniqueness
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On Save Hook, encrypt password
userSchema.pre('save', function(next) {
  // Get access to the user model
  const user = this;
  // Generate a salt then run callback to allow salt to be created
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err) };
    // encrypt the password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err)
      };
      // Overwrite plan text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    // If the two hashed passwords are equal, isMatch is true
    callback(null, isMatch);
  });
}
// Create the model class that represents all users
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;