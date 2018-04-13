var gulp = require('gulp');
var config = require('./config_ui.js');

gulp.task('uiDefault', ['uiJson:build', 'uiJs:build', 'uiPug:build', 'uiScss:build']);