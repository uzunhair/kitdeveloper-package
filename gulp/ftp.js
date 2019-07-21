import gulp from 'gulp';

/** FTP Configuration * */
import ftp from 'vinyl-ftp';
import gutil from 'gulp-util';

const user = '';
const password = '';
const host = '';
const port = 21;
const localFilesGlob = [
  'dist/**/*.html',
  'dist/js/**/*.js',
  'dist/css/**/*.css',
  'dist/img/**/*.*',
  'dist/fonts/**/*.*',
]; const remoteFolder = '/';

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {
  return ftp.create({
    host,
    port,
    user,
    password,
    parallel: 5,
    log: gutil.log,
  });
}

/**
 * Deploy task.
 * Copies the new files to the server
 */
gulp.task('ftp-deploy', () => {
  const conn = getFtpConnection();

  return gulp.src(localFilesGlob, { base: '.', buffer: false })
    .pipe(conn.newer(remoteFolder)) // only upload newer files
    .pipe(conn.dest(remoteFolder));
});

gulp.task('ftp-deploy-watch', () => {
  const conn = getFtpConnection();

  gulp.watch(localFilesGlob)
    .on('change', (event) => {
      console.log(`Changes detected! Uploading file "${event.path}", ${event.type}`); /* eslint-disable-line no-console */

      return gulp.src([event.path], { base: '.', buffer: false })
        .pipe(conn.newer(remoteFolder)) // only upload newer files
        .pipe(conn.dest(remoteFolder));
    });
});

gulp.task('ftp', (cb) => {
  gulp.series(
    'build',
    'ftp-deploy',
    'ftp-deploy-watch',
    'watch',
  )(cb);
});
/* FTP End * */
