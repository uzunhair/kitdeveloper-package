"use strict";

import gulp from "gulp";
import {path} from "./config";
import plumber from "gulp-plumber";
import data from "gulp-data";
import fs from "fs";
import pug from "gulp-pug";
import duration from "gulp-duration";
import browsersync from "browser-sync";
import yargs from "yargs";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import version from 'gulp-version-number';
import rename from "gulp-rename";
import cached from "gulp-cached";
import filter from "gulp-filter";
import debug from "gulp-debug";

const argv = yargs.argv,
	production = !!argv.production;

gulp.task('pug', function () {
	return gulp.src(path.pug.src)
		.pipe(plumber())
		.pipe(data(function (file) {
			return JSON.parse(fs.readFileSync(`${path.data.dist}${path.data.name}`, 'utf8'))
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(rename({dirname: '.'}))
		.pipe(gulpif(production, replace('<link href="css/system.css" rel="stylesheet">', '')))
		.pipe(gulpif(production, replace('theme.css', 'app.css')))
		.pipe(gulpif(production, version({
			'append': {
				'key': 'v',
				'to': ['css', 'js'],
			}
		})))
		.pipe(duration('pug:build time'))
		.pipe(gulp.dest(path.pug.dist))
		.pipe(debug({"title": "Pug files"}))
		.pipe(browsersync.stream());
});

gulp.task('pug:cached', function () {
	return gulp.src(path.pug.src)
		.pipe(plumber())
		.pipe(cached('pug'))
		.pipe(filter(file => `/src/blocks/pages/${file.path}`))
		.pipe(data(function (file) {
			return JSON.parse(fs.readFileSync(`${path.data.dist}${path.data.name}`, 'utf8'))
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(rename({dirname: '.'}))
		.pipe(gulpif(production, replace('<link href="css/system.css" rel="stylesheet">', '')))
		.pipe(gulpif(production, replace('theme.css', 'app.css')))
		.pipe(gulpif(production, version({
			'append': {
				'key': 'v',
				'to': ['css', 'js'],
			}
		})))
		.pipe(duration('pug:build time'))
		.pipe(gulp.dest(path.pug.dist))
		.pipe(debug({"title": "Pug cached files"}))
		.pipe(browsersync.stream());
});
