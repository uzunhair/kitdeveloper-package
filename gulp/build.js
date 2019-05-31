var gulp = require('gulp');

gulp.task('build', function(cb) {
    gulp.series(
      'svgIcon',
      //'html:build',
      'js:build',
      'styleTheme:build',
      'styleVendors:build',
      'pug:build',
      'fonts:build',
      'img:build',
      'sprite'
    )(cb)
});