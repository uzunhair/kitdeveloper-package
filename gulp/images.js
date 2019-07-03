"use strict";

import gulp from "gulp";
import { path } from "./config.js";
import changed from "gulp-changed";
import plumber from "gulp-plumber";
import yargs from "yargs";
import gulpif from "gulp-if";
import replace from "gulp-replace";

const argv = yargs.argv,
	production = !!argv.production;

gulp.task('images', function (cb) {
	const imagemin = require('gulp-imagemin'),
		imageminGifsicle = require('imagemin-gifsicle'),
		imageminJpegtran = require('imagemin-jpegtran'),
		imageminOptipng = require('imagemin-optipng');
	//imageminSvgo = require('imagemin-svgo');

	gulp.src(path.images.src)
		.pipe(changed(path.images.dist))
		.pipe(plumber())
		.pipe(gulpif(production, imagemin([
			imageminGifsicle({interlaced: true}),
			imageminJpegtran({progressive: true}),
			imageminOptipng({optimizationLevel: 5})
			// imageminSvgo({plugins: [{removeViewBox: true}]})
		])))
		.pipe(gulp.dest(path.images.dist));
	cb();
});


gulp.task('sprite', function (cb) {
	const spritesmith = require('gulp.spritesmith');
	const spriteData =
		gulp.src('./src/img/img-sprite/*.*')
			.pipe(spritesmith({
				imgName: '../img/sprite.png',
				cssName: '_sprite.scss',
				cssFormat: 'scss',
				algorithm: 'binary-tree',
				//cssTemplate: 'stylus.template.mustache',
				// cssVarMap: function(sprite) {
				//     sprite.name = 's-' + sprite.name
				// }
			}));

	spriteData.img.pipe(gulp.dest('./src/img/')); // путь, куда сохраняем картинку
	spriteData.css.pipe(gulp.dest('./src/sass/sprite/')); // путь, куда сохраняем стили
	cb();
});