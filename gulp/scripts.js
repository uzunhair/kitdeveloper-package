"use strict";

import gulp from "gulp";
import { path } from "./config.js";
import plumber from "gulp-plumber";
import uglify from "gulp-uglify";
import gulpif from "gulp-if";
import concat from "gulp-concat";
import yargs from "yargs";

const argv = yargs.argv,
	production = !!argv.production;

gulp.task('scripts', function (cb) {
	gulp.src(path.scripts.seperate.src)
		.pipe(plumber())
		.pipe(gulp.dest(path.scripts.dist));

	gulp.src(path.scripts.concat.src)
		.pipe(gulpif(production, uglify()))
		.pipe(plumber())
		.pipe(concat('app.js'))
		.pipe(gulp.dest(path.scripts.dist));
	cb();
});