import gulp from 'gulp';
import debug from 'gulp-debug';

// Данный таск предназначен для копирования файлов из папки node_modules.
// Внимание!!! Таск затирает файлы в проекте при совпадении имен и путей

const vendorList = {
  bootstrap: {
    './node_modules/bootstrap/scss/**': './src/scss/vendors/bootstrap',
  },
  fontAwesome: {
    './node_modules/font-awesome/fonts/*.*': './src/fonts/',
    './node_modules/font-awesome/scss/*.*': './src/scss/vendors/font-awesome/',
  },
};

gulp.task('npm:copy', (cb) => {
  Object.keys(vendorList).forEach((i) => {
    const vendorItem = vendorList[i];
    Object.keys(vendorItem).forEach((vendorPath) => {
      // console.log(vendorName, 'src: ' + vendorPath, 'dest: ' + vendorItem[vendorPath]);
      gulp.src(vendorPath)
        .pipe(debug({ title: `start:${i}` }))
        .pipe(gulp.dest(vendorItem[vendorPath]));
    });
  });
  cb();
});
