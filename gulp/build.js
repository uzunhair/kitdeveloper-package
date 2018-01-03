var gulp = require('gulp');

gulp.task('build', [
    'svgSprite:build',
    //'html:build',
    'pug:build',
    'js:build',
    'styleTheme:build',
    // 'styleTheme.min:build',
    'styleVendors:build',
    // 'styleVendors.min:build',
    'styleTypography:build',
    'fonts:build',
    'img:build'
]);