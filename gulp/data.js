import gulp from 'gulp';
import jsonConcat from 'gulp-json-concat';
import { path } from './config';

gulp.task('data', () => gulp.src(path.data.src)
/* eslint new-cap: [0, {capIsNewExceptions: ["from"]}] */
  .pipe(jsonConcat(path.data.name, data => new Buffer.from(JSON.stringify(data))))
  .pipe(gulp.dest(path.data.dist)));
