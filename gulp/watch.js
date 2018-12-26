var gulp = require('gulp'),
    config = require('./config.js');

gulp.task('watch', function () {
    //gulp.watch(config.path.watch.html, gulp.series('html:build'));
    gulp.watch(config.path.watch.pug, gulp.series('pug:build'));
    gulp.watch(config.path.watch.styleTheme, gulp.series('styleTheme:build', 'styleTypography:build'));
    gulp.watch(config.path.watch.styleVendors, gulp.series('styleVendors:build', 'styleTypography:build'));
    gulp.watch(config.path.watch.styleTheme, gulp.series('styleTheme.min:build'));
    gulp.watch(config.path.watch.styleVendors, gulp.series('styleVendors.min:build'));
    gulp.watch(config.path.watch.js, gulp.series('js:build'));
    gulp.watch(config.path.watch.img, gulp.series('img:build', 'sprite'));
    gulp.watch(config.path.watch.svgIcon, gulp.series('svgIcon'));
    gulp.watch(config.path.watch.fonts, gulp.series('fonts:build'));
});