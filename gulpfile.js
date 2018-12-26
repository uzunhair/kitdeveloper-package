"use strict";

var gulp = require("gulp"),
    reqDir = require('require-dir');
    reqDir('./gulp', { recurse: true });

gulp.task('default', function(cb) {
    gulp.parallel(
      'build',
      'watch',
      'browser-sync'
    )(cb)
});