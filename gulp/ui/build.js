const gulp = require('gulp');

gulp.task('ui:build', function (cb) {
	gulp.parallel(
		'uiJson:build',
		'uiJs:build',
		'uiPug:build',
		'uiScss:build'
	)(cb);
});
