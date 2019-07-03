"use strict";

import gulp from "gulp";
import { path } from "./config.js";
import browserSync from  "browser-sync";

gulp.task("browser-sync", () => {
    browserSync.init({
        server: "./dist/",
        port: 4000,
        notify: false
    });

    gulp.watch(path.pug.watch, gulp.parallel("pug"));
    gulp.watch(path.styles.theme.watch, gulp.parallel("styles:theme"));
    gulp.watch(path.styles.vendors.watch, gulp.parallel("styles:vendors"));
    gulp.watch(path.scripts.watch, gulp.parallel("scripts"));
    gulp.watch(path.sprites.watch, gulp.parallel("sprites"));
    gulp.watch(path.images.watch, gulp.parallel("images"));
    gulp.watch(path.fonts.watch, gulp.parallel("fonts"));
});