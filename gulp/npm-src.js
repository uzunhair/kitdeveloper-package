"use strict";

import gulp from "gulp";
import debug from "gulp-debug";

// Данный таск предназначен для копирования файлов из папки node_modules.
// Таск запускается на старте проекта

const vendorList = {
	bootstrap: {
		'./node_modules/bootstrap/js/dist/*.js': './src/js/concat/bootstrap',
		'./node_modules/bootstrap/scss/**': './src/sass/vendors/bootstrap'
	},
	fontAwesome: {
		'./node_modules/font-awesome/fonts/*.*': './src/fonts/',
		'./node_modules/font-awesome/scss/*.*': './src/sass/vendors/font-awesome/'
	}
};

gulp.task('npm:copy', function (cb) {
	for (const vendorName in vendorList) {
		const vendorItem = vendorList[vendorName];
		for (const vendorPath in vendorItem) {
			// console.log(vendorName, 'src: ' + vendorPath, 'dest: ' + vendorItem[vendorPath]);
			gulp.src(vendorPath)
				.pipe(debug({title: 'start:' + vendorName}))
				.pipe(gulp.dest(vendorItem[vendorPath]));
		}
	}
	cb();
});