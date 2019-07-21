

import gulp from 'gulp';
import { path } from './config';

gulp.task('fonts', (cb) => {
  gulp.src(path.fonts.src)
    .pipe(gulp.dest(path.fonts.dist));
  cb();
});
