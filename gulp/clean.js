"use strict";

import gulp from "gulp";
import { path } from "./config.js";
import del from "del";

gulp.task('clean', function () {
    return del([
        path.clean.dist,
    ]);
});