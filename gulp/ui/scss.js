var gulp = require('gulp'),
    config = require('./config_ui.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('uiScss:build', function (cb) {
    gulp.src('src/ui/css/*.*')
        .pipe(plugin.plumber())
        .pipe(plugin.sourcemaps.init({largeFile: true}))
        .pipe(plugin.sass().on('error', plugin.sass.logError))
        .pipe(plugin.sassUnicode())
        .pipe(plugin.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(plugin.pxtorem())
        .pipe(plugin.sourcemaps.write(''))
        .pipe(gulp.dest('dist/ui/css/'));
    cb();
});