var gulp = require('gulp'),
    config = require('./config'),
    del = require('del');

gulp.task('clean', function () {
    return del([
        config.path.clean.html,
        config.path.clean.js,
        config.path.clean.style,
        config.path.clean.img,
        config.path.clean.svg,
        config.path.clean.fonts
    ]);
});