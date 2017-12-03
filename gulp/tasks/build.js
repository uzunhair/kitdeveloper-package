var gulp = require('gulp');

gulp.task('build', [
    'html:build',
    'js:build',
    'styleTheme:build',
    // 'styleTheme.min:build',
    'styleVendors:build',
    // 'styleVendors.min:build',
    'fonts:build',
    'img:build'
]);