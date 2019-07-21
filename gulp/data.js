import {path}from './config';
import gulp from 'gulp';
import jsonConcat from 'gulp-json-concat';

gulp.task('data', function () {
	return gulp.src(path.data.src)
		.pipe(jsonConcat(path.data.name, function (data){
			return new Buffer.from(JSON.stringify(data));
		}))
		.pipe(gulp.dest(path.data.dist));
});
