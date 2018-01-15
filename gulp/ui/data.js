var gulp = require('gulp'),
    config = require('./config_ui.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('ui_js:build', function () {
    gulp.src(['src/ui/js/*.*', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.js']) //Выберем файлы по нужному пути
        .pipe(plugin.replace('//# sourceMappingURL=', '// MappingURL '))
        .pipe(gulp.dest('dist/ui/js/')) //Выплюнем их в папку build
});