var gulp = require('gulp'),
    config = require('./config_ui.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('uiJson:build', function (cb) {
    gulp.src(['src/ui/data/**/*.json', '!src/ui/data/data.json'])
        .pipe(plugin.jsonConcat('data.json',function(data){
            return new Buffer.from(JSON.stringify(data));
        }))
        .pipe(gulp.dest('src/ui/data/'));
    cb();
});