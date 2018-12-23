var gulp = require('gulp');

gulp.task('build', function(cb) {
    gulp.parallel(
      'svgSprite:build',
      //'html:build',
      'pug:build',
      'js:build',
      'styleTheme:build',
      'styleTheme.min:build',
      'styleVendors:build',
      'styleVendors.min:build',
      'styleTypography:build',
      'fonts:build',
      'img:build',
      'sprite'
    )(cb)
});