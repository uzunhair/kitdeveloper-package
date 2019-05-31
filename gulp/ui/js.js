var gulp = require('gulp'),
    config = require('./config_ui.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('uiJs:build', function (cb) {
    gulp.src(['src/ui/js/*.*', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.js'])
        .pipe(plugin.replace('//# sourceMappingURL=', '// MappingURL '))
        .pipe(gulp.dest('dist/ui/js/'));
    cb();
});