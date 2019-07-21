'use strict';

import gulp from 'gulp';
import debug from 'gulp-debug';

// Данный таск предназначен для копирования файлов из папки node_modules.
// Таск запускается на старте проекта

const vendorList = {
	bootstrap: {
		'./node_modules/bootstrap/scss/**': './src/sass/vendors/bootstrap'
	},
	fontAwesome: {
		'./node_modules/font-awesome/fonts/*.*': './src/fonts/',
		'./node_modules/font-awesome/scss/*.*': './src/sass/vendors/font-awesome/'
	}
};
console.log(typeof(vendorList));

gulp.task('npm:copy', function (cb) {
	Object.keys(vendorList).forEach(function (i){
		const vendorItem = vendorList[i];

		for (const vendorPath in vendorItem) {
			// console.log(vendorName, 'src: ' + vendorPath, 'dest: ' + vendorItem[vendorPath]);
			gulp.src(vendorPath)
				.pipe(debug({title: 'start:' + i}))
				.pipe(gulp.dest(vendorItem[vendorPath]));
		}
	});
	cb();
});
