var gulp         = require('gulp'),
    // CSS Postprocessor to convert to standard CSS
    postcss      = require('gulp-postcss'),
    // PostCSS plugin that adds in vendor prefixes automatically
    autoprefixer = require('autoprefixer'),
    // PostCSS plugin allowing the use of variables in CSS file
    cssvars      = require('postcss-simple-vars'),
    // PostCSS plugin allowing nested selectors in CSS file
    nested       = require('postcss-nested'),
    // PostCSS plugin allowing the use of mixins in CSS file
    mixins       = require('postcss-mixins'),
    // PostCSS plugin that concats the imported files into the main css file
    cssImport    = require('postcss-import'),
    // PostCSS plugin allowing the use of hex color values in rgba() modifiers
    hexrgba      = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    // Sends css through PostCSS with the autoprefixer option
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    // Handle errors and allow gulp watch to continue operating
    .on('error', function(errorInfo) {
      // Displays info for the error in the console in a readable format
      console.log(errorInfo.toString());
      // Tells gulp.watch that the styles task ended correctly
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
