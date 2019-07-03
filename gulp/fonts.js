"use strict";

import gulp from "gulp";
import { path } from "./config.js";

gulp.task('fonts', function (cb) {
	gulp.src(path.fonts.src)
		.pipe(gulp.dest(path.fonts.dist));
	cb();
});