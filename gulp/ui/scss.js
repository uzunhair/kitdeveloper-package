var gulp = require('gulp');
var config = require('./config_ui.js');

gulp.task('uiScss:build', function (cb) {
    gulp.src('src/ui/css/*.*') //Выберем файлы по нужному пути
        .pipe(gulp.dest('dist/ui/css/')); //Выплюнем их в папку build
    cb();
});