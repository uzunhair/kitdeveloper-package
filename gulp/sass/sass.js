var gulp = require('gulp'),
    config = require('../config.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('styleTheme:build', function () {
    gulp.src(config.path.src.styleTheme) //Выберем наш system.scss
        .pipe(plugin.plumber())
        .pipe(plugin.sourcemaps.init({largeFile: true})) //То же самое что и с js
        .pipe(plugin.sass().on('error', plugin.sass.logError)) //Скомпилируем
        .pipe(plugin.sassUnicode())
        .pipe(plugin.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(plugin.pxtorem())
        .pipe(plugin.sourcemaps.write(''))
        .pipe(gulp.dest(config.path.build.style)) //И в build
});

gulp.task('styleVendors:build', function () {
    gulp.src(config.path.src.styleVendors) //Выберем наш system.scss
        .pipe(plugin.plumber())
        .pipe(plugin.sourcemaps.init({largeFile: true})) //То же самое что и с js
        .pipe(plugin.sass().on('error', plugin.sass.logError)) //Скомпилируем
        .pipe(plugin.sassUnicode())
        .pipe(plugin.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(plugin.pxtorem())
        .pipe(plugin.sourcemaps.write(''))
        .pipe(gulp.dest(config.path.build.style)) //И в build
});