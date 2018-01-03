var gulp = require('gulp'),
    config = require('./config.js'),
    browserSync = require('browser-sync').create();


gulp.task('browser-sync', ['watch'], function () {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
        notify: false,
        reloadDelay: 1000,
        port: 3100
    });

    gulp.watch(config.path.browser.js).on("change", browserSync.reload);
    gulp.watch(config.path.browser.html).on('change', browserSync.reload);
    gulp.watch(config.path.browser.style).on('change', browserSync.reload);
});