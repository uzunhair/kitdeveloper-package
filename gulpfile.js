"use strict";

var gulp = require("gulp"),
    reqDir = require('require-dir');
    reqDir('./gulp', { recurse: true });

gulp.task('default', ['browser-sync', 'build', 'watch']);