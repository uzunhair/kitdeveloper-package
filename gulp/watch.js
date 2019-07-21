

const gulp = require('gulp');
const { path } = require('./config');

gulp.task('watch', () => {
  gulp.watch(path.pug.watch, { usePolling: true }, gulp.series('pug'));
  gulp.watch(path.styles.theme.watch, { usePolling: true }, gulp.series('styles:theme'));
  gulp.watch(path.styles.vendors.watch, { usePolling: true }, gulp.series('styles:vendors'));
  gulp.watch(path.scripts.watch, { usePolling: true }, gulp.series('scripts'));
  gulp.watch(path.images.watch, { usePolling: true }, gulp.series('images'));
  gulp.watch(path.sprites.watch, { usePolling: true }, gulp.series('sprites'));
  gulp.watch(path.fonts.watch, { usePolling: true }, gulp.series('fonts'));
});
