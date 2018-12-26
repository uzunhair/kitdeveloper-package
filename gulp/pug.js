"use strict";

var gulp = require('gulp'),
    config = require('./config.js'),
    fs           = require('fs'),
    plugin = require('gulp-load-plugins')();

gulp.task('pug:build', function (cb) {
    return gulp.src(config.path.src.pug)
        .pipe(plugin.plumber())
        .pipe(plugin.data(function(file) { // Парсим JSON
            return JSON.parse(fs.readFileSync('./src/pug/data/data.json', 'utf8'))
        }))
        .pipe(plugin.pug({
            pretty: true
        }))
        .pipe(plugin.duration('pug:build time'))
        .pipe(gulp.dest(config.path.build.pug))
});
