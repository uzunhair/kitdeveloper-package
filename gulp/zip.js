import gulp from 'gulp';
import zip from 'gulp-zip';
import debug from "gulp-debug";

gulp.task('zip', function (cb) {
	gulp.src('dist')
		.pipe(zip('archive.zip'))
		.pipe(debug({
			"title": "CSS files"
		}))
		.pipe(gulp.dest('zip'));
	cb();
});
