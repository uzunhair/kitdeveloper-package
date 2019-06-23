var gulp = require('gulp'),
    config = require('./config.js'),
    plugin = require('gulp-load-plugins')();

// Данный таск предназначен для копирования файлов из папки node_modules.
// Таск запускается на старте проекта

var vendorList = {
    bootstrap: {
        './node_modules/bootstrap/js/dist/*.js':    './src/js/concat/bootstrap',
        './node_modules/bootstrap/scss/**':         './src/sass/vendors/bootstrap'
    },
    fontAwesome: {
        './node_modules/font-awesome/fonts/*.*':    './src/fonts/',
        './node_modules/font-awesome/scss/*.*':     './src/sass/vendors/font-awesome/'
    },
    // owl_carousel: {
    //     './node_modules/owl.carousel/src/scss/**': './src/sass/vendors/owl.carousel',
    //     './node_modules/owl.carousel/dist/owl.carousel.js': './src/js/concat/owl.carousel'
    // }
};

gulp.task('npm:copy', function (cb) {
    for (var vendorName in vendorList) {
        var vendorItem = vendorList[vendorName];
        for (var vendorPath in vendorItem) {
            // console.log(vendorName, 'src: ' + vendorPath, 'dest: ' + vendorItem[vendorPath]);
            gulp.src(vendorPath)
                .pipe(plugin.changed(vendorItem[vendorPath]))
                .pipe(plugin.debug({title: 'start:' + vendorName}))
                .pipe(gulp.dest(vendorItem[vendorPath]));
        }
    }
    cb();
});