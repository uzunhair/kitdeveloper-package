var gulp = require('gulp'),
    config = require('../config.js');

gulp.task('watch', function () {
    gulp.watch(config.path.watch.php, ['php:build']);
    gulp.watch(config.path.watch.html, ['html:build']);
    gulp.watch(config.path.watch.styleTheme, ['styleTheme:build']);
    gulp.watch(config.path.watch.styleVendors, ['styleVendors:build']);
    // gulp.watch(config.path.watch.styleTheme, ['styleTheme.min:build']);
    // gulp.watch(config.path.watch.styleVendors, ['styleVendors.min:build']);
    gulp.watch(config.path.watch.js, ['js:build']);
    gulp.watch(config.path.watch.img, ['img:build']);
    gulp.watch(config.path.watch.fonts, ['fonts:build']);
});