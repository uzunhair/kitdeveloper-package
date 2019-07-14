"use strict";

import gulp from "gulp";
const reqDir = require('require-dir');
    reqDir('./gulp', { recurse: true });

gulp.task('default', function(cb) {
	gulp.series(
		[
			'clean',
			'data',
		],
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

gulp.task('production', function(cb) {
	gulp.series("clean",
		gulp.series([
			'data',
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