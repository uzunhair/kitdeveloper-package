var gulp = require('gulp'),
    config = require('./config.js'),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync', function(cb) {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
        notify: false,
        reloadDelay: 1000,
        port: 3100
    });

    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
    cb();
});