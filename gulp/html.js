var gulp = require('gulp'),
    config = require('./config.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('html:build', function (cb) {
    gulp.src(config.path.src.html) //Выберем файлы по нужному пути
        .pipe(plugin.plumber())
        .pipe(plugin.fileInclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gulp.dest(config.path.build.html)); //Выплюнем их в папку build
    cb();
});