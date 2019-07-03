"use strict";

import gulp from "gulp";
import { path } from "./config.js";
import plumber from "gulp-plumber";
import debug from "gulp-debug";
import svgmin from "gulp-svgmin";
import cheerio from "gulp-cheerio";
import svgSprite from "gulp-svg-sprite";
import replace from "gulp-replace";

gulp.task('sprites', function (cb) {
	gulp.src(path.sprites.src)
		.pipe(plumber())
		.pipe(debug({
			title: 'File Src:'
		}))
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(cheerio({
			run: function ($, file) {
				$('svg *').each(function () {
					const svg = $(this);
					const stroke = svg.attr('stroke'),
						stroke_width = svg.attr('stroke-width'),
						data_width = svg.attr('data-width'),
						fill = svg.attr('fill');

					if (typeof stroke !== typeof undefined && stroke !== 'none') {
						svg.removeAttr('stroke');
						svg.attr('data-stroke', 'true');
						if (typeof data_width !== typeof undefined) {
							svg.attr('data-width', stroke_width);
						}
					}

					if (typeof fill !== typeof undefined && fill !== 'none') {
						svg.removeAttr('fill');
						svg.attr('data-fill', 'true');

					} else {
						svg.attr('data-fill-none', 'none');
					}

				});
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg",
					svg: {
						xmlDeclaration: false,
						doctypeDeclaration: false
					},
					render: {
						scss: {
							dest: '../../../sass/sprite/_sprite.scss',
							template: "src/sass/sprite/_svg_sprite_template.scss"
						}
					}
				}
			}
		}))
		.pipe(replace('data-width', 'stroke-width'))
		.pipe(replace('data-fill-none', 'fill'))
		.pipe(gulp.dest(path.sprites.dist))
		.pipe(debug({
			title: 'File Build:'
		}));
	cb();
});