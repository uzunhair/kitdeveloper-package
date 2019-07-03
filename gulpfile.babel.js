"use strict";

import gulp from "gulp";
const reqDir = require('require-dir');
    reqDir('./gulp', { recurse: true });

gulp.task('default', function(cb) {
	gulp.series(
		'clean',
		gulp.parallel(
			'styles:vendors',
			'styles:theme',
			'pug',
			'scripts',
			'fonts',
			'images',
			'sprites',
			'favicons',
		),gulp.parallel("browser-sync")
	)(cb);
});

gulp.task('dev', function(cb) {
	gulp.series(
		'clean',
		gulp.series(
			'styles:vendors',
			'styles:theme',
			'pug',
			'scripts',
			'fonts',
			'images',
			'sprites',
			'favicons',
		)
	)(cb);
});

gulp.task('production', function(cb) {
	gulp.series("clean",
		gulp.series([
			'pug',
			'scripts',
			'styles:production',
			'fonts',
			'sprites',
			'images',
			'favicons'
		])
	)(cb)
});