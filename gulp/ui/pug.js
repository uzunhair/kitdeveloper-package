var gulp = require('gulp'),
    config = require('./config_ui.js'),
    fs           = require('fs'),
    plugin = require('gulp-load-plugins')();

gulp.task('uiPug:build', function () {
    return gulp.src('src/ui/*.pug')
        .pipe(plugin.plumber())
        .pipe(plugin.data(function(file) { // Парсим JSON
            return JSON.parse(fs.readFileSync('./src/ui/data/data.json', 'utf8'))
        }))
        .pipe(plugin.pug({
            pretty: true
        }))
        .pipe(plugin.duration('pug:build time'))
        .pipe(gulp.dest('dist/ui/'))
});