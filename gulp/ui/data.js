var gulp = require('gulp'),
    config = require('./config_ui.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('uiJson:build', function () {
    gulp.src(['src/ui/data/**/*.json', '!src/ui/data/data.json']) //Выберем файлы по нужному пути
        .pipe(plugin.jsonConcat('data.json',function(data){
            return new Buffer(JSON.stringify(data));
        }))
        .pipe(gulp.dest('src/ui/data/')) //Выплюнем их в папку build
});