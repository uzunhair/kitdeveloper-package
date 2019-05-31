var gulp = require('gulp'),
    config = require('./config.js');

gulp.task('watch', function () {
    //gulp.watch(config.path.watch.html, gulp.series('html:build'));
    gulp.watch(config.path.watch.pug, {usePolling: true}, gulp.series('pug:build'));
    gulp.watch(config.path.watch.styleTheme, {usePolling: true}, gulp.series('styleTheme:build'));
    gulp.watch(config.path.watch.styleVendors, {usePolling: true}, gulp.series('styleVendors:build'));
    gulp.watch(config.path.watch.js, {usePolling: true}, gulp.series('js:build'));
    gulp.watch(config.path.watch.img, {usePolling: true}, gulp.series('img:build', 'sprite'));
    gulp.watch(config.path.watch.svgIcon, {usePolling: true}, gulp.series('svgIcon'));
    gulp.watch(config.path.watch.fonts, {usePolling: true}, gulp.series('fonts:build'));
});