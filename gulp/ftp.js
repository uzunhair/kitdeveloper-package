"use strict";

const gulp = require('gulp'),
	{path} = require('./config.js'),
    plugin = require('gulp-load-plugins')();


/** FTP Configuration **/
var ftp = require('vinyl-ftp'),
    gutil = require('gulp-util');

var user = '',
    password = '',
    host = '',
    port = 21,
    localFilesGlob = [
        'dist/**/*.html',
        'dist/js/**/*.js',
        'dist/css/**/*.css',
        'dist/img/**/*.*',
        'dist/fonts/**/*.*'
    ], remoteFolder = '/';

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {
    return ftp.create({
        host: host,
        port: port,
        user: user,
        password: password,
        parallel: 5,
        log: gutil.log
    });
}

/**
 * Deploy task.
 * Copies the new files to the server
 */
gulp.task('ftp-deploy', function () {
    var conn = getFtpConnection();

    return gulp.src(localFilesGlob, {base: '.', buffer: false})
        .pipe(conn.newer(remoteFolder)) // only upload newer files
        .pipe(conn.dest(remoteFolder));
});

gulp.task('ftp-deploy-watch', function () {

    var conn = getFtpConnection();

    gulp.watch(localFilesGlob)
        .on('change', function (event) {
            console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);

            return gulp.src([event.path], {base: '.', buffer: false})
                .pipe(conn.newer(remoteFolder)) // only upload newer files
                .pipe(conn.dest(remoteFolder));
        });
});

gulp.task('ftp', function(cb) {
  gulp.series(
    'build',
    'ftp-deploy',
    'ftp-deploy-watch',
    'watch'
  )(cb)
});
/* FTP End **/