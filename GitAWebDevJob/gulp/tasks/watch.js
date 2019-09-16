var gulp         = require('gulp'),
    // Allows live reloading when watched files change
    watch        = require('gulp-watch'),
    // Reloads the browser on file change save
    // Only accessing the .create() method to auto-refresh
    browserSync  = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    // Prevents browser-sync notification in window upon live inject
    notify: false,
    server: {
      // Creates a dev server based on app dir
      baseDir: 'app'
    }
  });
  // Watches index.html for changes and reloads browser on change
  watch('./app/index.html', function() {
    // Auto refresh upon change
    browserSync.reload();
  });
  // Watches for changes in any css file within the styles directory
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  // Watches for changes in javascript files and then runs webpack to bundle them
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
});

// Injects css changes without reloading entire page
// Array param sets dependencies of the cssInject task
gulp.task('cssInject', ['styles'], function() {
  // Use return because gulp.src is an async function
  return gulp.src('./app/temp/styles/styles.css')
    // Browser-sync method stream() makes whatever is piped in available in the browser
    .pipe(browserSync.stream());
});

// Refreshes app after js files are bundled
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
