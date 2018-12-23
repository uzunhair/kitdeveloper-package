var gulp = require('gulp'),
    config = require('../config.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('svgSpriteChunk', function (cb) {
    gulp.src('src/img/svg/sprite.svg')
        .pipe(plugin.plumber())
        .pipe(plugin.rename({
            basename: "svgSprite",
            suffix: ".tpl",
            extname: ""
        }))
        .pipe(gulp.dest('./dist/tpl/structure'));
    cb();
});