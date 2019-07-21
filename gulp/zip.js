import gulp from 'gulp';
import zip from 'gulp-zip';
import debug from 'gulp-debug';
import { path, currentDate } from './config';

gulp.task('zip', (cb) => {
  gulp.src(path.zip.src)
    .pipe(zip(`archive${currentDate}.zip`))
    .pipe(debug({
      title: 'Zip files',
    }))
    .pipe(gulp.dest(path.zip.dist));
  cb();
});
