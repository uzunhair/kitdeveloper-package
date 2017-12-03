var gulp = require('gulp'),
    config = require('../config.js'),
    del = require('del');

    gulp.task('clean', function () {
        return del([
            config.path.clean.all
        ]);
    });