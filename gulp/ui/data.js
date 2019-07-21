const gulp = require('gulp');
const plugin = require('gulp-load-plugins')();

gulp.task('uiJson:build', (cb) => {
  gulp.src(['src/ui/data/**/*.json', '!src/ui/data/data.json'])
    /* eslint new-cap: [0, {capIsNewExceptions: ["from"]}] */
    .pipe(plugin.jsonConcat('data.json', data => new Buffer.from(JSON.stringify(data))))
    .pipe(gulp.dest('src/ui/data/'));
  cb();
});
