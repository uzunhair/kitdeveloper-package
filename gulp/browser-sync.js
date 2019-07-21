

import gulp from 'gulp';
import browserSync from 'browser-sync';
import { path } from './config';

gulp.task('browser-sync', () => {
  browserSync.init({
    server: './dist/',
    port: 4000,
    notify: false,
  });

  gulp.watch(path.data.watch, gulp.parallel('data'));
  gulp.watch(path.data.dist, gulp.parallel('pug'));
  gulp.watch(path.pug.watch, gulp.parallel('pug:cached'));
  gulp.watch(path.styles.theme.watch, gulp.parallel('styles:theme'));
  gulp.watch(path.styles.vendors.watch, gulp.parallel('styles:vendors'));
  gulp.watch(path.scripts.watch, gulp.parallel('scripts'));
  gulp.watch(path.sprites.watch, gulp.parallel('sprites'));
  gulp.watch(path.images.watch, gulp.parallel('images'));
  gulp.watch(path.fonts.watch, gulp.parallel('fonts'));
});
