var gulp = require('gulp'),
    webpack = require('webpack');

// callback param is a function that tells gulp webpack is complete
gulp.task('scripts', ['modernizr'], function(callback) {
  // Two params - require the config file, and then function to run
  // webpack provides two params for the anonymous function
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
