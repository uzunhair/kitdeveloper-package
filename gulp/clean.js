

import gulp from 'gulp';
import del from 'del';
import { path } from './config';

gulp.task('clean', () => del([
  path.clean.dist,
]));
