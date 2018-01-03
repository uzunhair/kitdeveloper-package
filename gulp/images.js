var gulp = require('gulp'),
    config = require('./config.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('img:build', function () {
    var imagemin = require('gulp-imagemin'),
        imageminGifsicle = require('imagemin-gifsicle'),
        imageminJpegtran = require('imagemin-jpegtran'),
        imageminOptipng = require('imagemin-optipng');
        //imageminSvgo = require('imagemin-svgo');

    gulp.src(config.path.src.img) //Выберем наши картинки
        .pipe(plugin.changed(config.path.build.img))
        .pipe(plugin.plumber())
        .pipe(imagemin([
            imageminGifsicle({interlaced: true}),
            imageminJpegtran({progressive: true}),
            imageminOptipng({optimizationLevel: 5}),
           // imageminSvgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest(config.path.build.img)) //И бросим в build
});