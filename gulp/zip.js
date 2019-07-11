import {path, currentDate} from "./config";
import gulp from 'gulp';
import zip from 'gulp-zip';
import debug from "gulp-debug";
import rename from "gulp-rename";

gulp.task('zip', function (cb) {
	gulp.src(path.zip.src)
		.pipe(zip('archive.zip'))
		.pipe(rename(function (path) {
			path.basename += currentDate;
		}))
		.pipe(debug({
			"title": "Zip files"
		}))
		.pipe(gulp.dest(path.zip.dist));
	cb();
});
