var gulp = require('gulp');
var config = require('./config_ui.js');

gulp.task('ui:build', function(cb) {
	gulp.parallel(
		'uiJson:build',
		'uiJs:build',
		'uiPug:build',
		'uiScss:build'
	)(cb)
});