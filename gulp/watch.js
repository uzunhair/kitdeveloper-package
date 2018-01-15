var gulp = require('gulp'),
    config = require('./config.js');

gulp.task('watch', function () {
    //gulp.watch(config.path.watch.html, ['html:build']);
    gulp.watch(config.path.watch.pug, ['pug:build']);
    gulp.watch(config.path.watch.styleTheme, ['styleTheme:build', 'styleTypography:build']);
    gulp.watch(config.path.watch.styleVendors, ['styleVendors:build', 'styleTypography:build']);
    // gulp.watch(config.path.watch.styleTheme, ['styleTheme.min:build']);
    // gulp.watch(config.path.watch.styleVendors, ['styleVendors.min:build']);
    gulp.watch(config.path.watch.js, ['js:build']);
    gulp.watch(config.path.watch.img, ['img:build', 'svgSprite:build']);
    gulp.watch(config.path.watch.fonts, ['fonts:build']);
});