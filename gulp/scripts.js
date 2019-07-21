'use strict';

import gulp from 'gulp';
import {path}from './config.js';
import plumber from 'gulp-plumber';
// import yargs from "yargs";
import webpackStream from 'webpack-stream';
import named from 'vinyl-named';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

// const argv = yargs.argv,
// 	production = !!argv.production;

gulp.task('scripts:vendors', function (cb) {
	gulp.src(path.scripts.seperate.src)
		.pipe(plumber())
		.pipe(gulp.dest(path.scripts.dist));
	cb();
});

gulp.task('scripts', function (cb) {
	gulp.src(path.scripts.concat.src)
		.pipe(plumber())
		.pipe(named())
		.pipe(webpackStream({
			mode: 'production',
			output: {
				filename: '[name].js'
			},
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ['@babel/preset-env']
						}
					}
				]
			},
			optimization: {
				minimizer: [
					new UglifyJsPlugin({
						uglifyOptions: {
							warnings: false,
							output: null
						}
					})
				]
			},
			externals: {
				jquery: 'jQuery'
			}
		}))
		.pipe(gulp.dest(path.scripts.dist));
	cb();
});
