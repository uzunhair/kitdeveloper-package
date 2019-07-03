"use strict";

import { path } from "./config.js";
import gulp from "gulp";
import sass from "gulp-sass";
import sassUnicode from "gulp-sass-unicode";
import pxtorem from "gulp-pxtorem";
import duration from "gulp-duration";
import mincss from "gulp-clean-css";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";
import debug from "gulp-debug";

// В dev режиме времено отлючены плагины
// gulp-group-css-media-queries
// gulp-clean-css

gulp.task('styles:theme', function (cb) {
	gulp.src(path.styles.theme.src)
		.pipe(sourcemaps.init({largeFile: true}))
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(sassUnicode())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(pxtorem())
		.pipe(sourcemaps.write("./maps/"))
		.pipe(duration('Assembly time styles theme'))
		.pipe(gulp.dest(path.styles.dist))
		.pipe(debug({
			"title": "CSS files"
		}))
		.pipe(browsersync.stream());
	cb();
});

gulp.task('styles:vendors', function (cb) {
	gulp.src(path.styles.vendors.src)
		.pipe(sourcemaps.init({largeFile: true}))
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(sassUnicode())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(pxtorem())
		.pipe(sourcemaps.write("./maps/"))
		.pipe(duration('Assembly time styles theme'))
		.pipe(gulp.dest(path.styles.dist))
		.pipe(debug({
			"title": "CSS files"
		}))
		.pipe(browsersync.stream());
	cb();
});

gulp.task('styles:production', function (cb) {
	gulp.src(path.styles.production.src)
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(sassUnicode())
		.pipe(groupmedia())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(mincss())
		.pipe(pxtorem())
		.pipe(duration('Assembly time styles'))
		.pipe(gulp.dest(path.styles.dist))
		.pipe(debug({
			"title": "CSS files"
		}));
	cb();
});