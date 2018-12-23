var gulp = require('gulp');
var config = require('./config.js');

gulp.task('fonts:build', function(cb) {
    gulp.src(config.path.src.fonts) //Выберем файлы по нужному пути
      .pipe(gulp.dest(config.path.build.fonts)); //Выплюнем их в папку build
    cb();
});