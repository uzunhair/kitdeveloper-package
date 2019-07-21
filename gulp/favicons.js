

import gulp from 'gulp';
import favicons from 'gulp-favicons';
import debug from 'gulp-debug';
import { path } from './config';

gulp.task('favicons', () => gulp.src(path.favicons.src)
  .pipe(favicons({
    icons: {
      appleIcon: true,
      favicons: true,
      online: false,
      appleStartup: false,
      android: false,
      firefox: false,
      yandex: false,
      windows: false,
      coast: false,
    },
  }))
  .pipe(gulp.dest(path.favicons.dist))
  .pipe(debug({
    title: 'Favicons',
  })));
