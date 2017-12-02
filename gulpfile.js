"use strict";

var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    pxtorem = require('gulp-pxtorem'),
    autoprefixer = require('gulp-autoprefixer'),
    mqpacker = require('css-mqpacker'),
    sass = require('gulp-sass'),
    sassUnicode = require('gulp-sass-unicode'),  // Не допускает ошибок при наличии обратного слеша "\fff"
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'), // Собирает html файлы
    uglify = require('gulp-uglify'),
    del = require('del'), // Удаление файлов
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed'), // запускают таски только для изменившихся файлов
    gulpif = require('gulp-if'),
    mainBowerFiles = require('main-bower-files'),
    fileinclude = require('gulp-file-include'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create();

var duration    = require('gulp-duration');

// https://www.npmjs.com/package/gulp-zip


var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        php: 'dist/',
        js: 'dist/js/',
        style: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        php: 'src/*.php',
        jsSeparate: ['src/js/separate/*.js', 'node_modules/holderjs/holder.js'], // статичные js файлы
        jsConcat: [
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/bootstrap/js/dist/util.js',
            'node_modules/bootstrap/js/dist/alert.js',
            'node_modules/bootstrap/js/dist/button.js',
            'node_modules/bootstrap/js/dist/carousel.js',
            'node_modules/bootstrap/js/dist/collapse.js',
            'node_modules/bootstrap/js/dist/dropdown.js',
            'node_modules/bootstrap/js/dist/modal.js',
            'node_modules/bootstrap/js/dist/scrollspy.js',
            'node_modules/bootstrap/js/dist/tab.js',
            'node_modules/bootstrap/js/dist/tooltip.js',
            'node_modules/bootstrap/js/dist/popover.js',
            'src/js/concat/*.js',
            'src/js/setting.js'],
        styleTheme: 'src/sass/theme.scss',
        styleVendors: 'src/sass/system.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        php: 'src/**/*.php',
        js: 'src/js/**/*.js',
        styleTheme: ['src/sass/theme/**/*.scss', 'src/sass/config/*.scss'],
        styleVendors: ['src/sass/vendors/**/*.scss', 'src/sass/config/*.scss'],
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    browser: {
        html: 'dist/**/*.html',
        php: 'dist/**/*.php',
        js: 'dist/js/**/*.js',
        style: 'dist/css/**/*.*',
        img: 'dist/img/**/*.*',
        fonts: 'dist/fonts/**/*.*'
    },
    clean: {
        all: './dist'
    }
};

gulp.task('browser-sync', ['watch'], function () {
    // browserSync.init({
    //     proxy: 'gulp.default',
    //     logConnections: true,
    //     notify: false,
    //     reloadDebounce: 200
    // });

    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

});

gulp.task('html:build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(plumber())
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent:true

        }))
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
});

gulp.task('php:build', function () {
    gulp.src(path.src.php) //Выберем файлы по нужному пути
        .pipe(plumber())
        .pipe(gulp.dest(path.build.php)) //Выплюнем их в папку build
});

gulp.task('js:build', function () {
    gulp.src(path.src.jsSeparate)
        .pipe(plumber())
        .pipe(gulp.dest(path.build.js));

    gulp.src(path.src.jsConcat)
        .pipe(uglify())
        .pipe(plumber())
        .pipe(concat('theme.min.js'))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('styleTheme:build', function () {
    gulp.src(path.src.styleTheme) //Выберем наш system.scss
        .pipe(plumber())
        .pipe(sourcemaps.init({largeFile: true})) //То же самое что и с js
        .pipe(sass().on('error', sass.logError)) //Скомпилируем
        .pipe(sassUnicode())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(pxtorem())
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(path.build.style)) //И в build
});

gulp.task('styleVendors:build', function () {
    gulp.src(path.src.styleVendors) //Выберем наш system.scss
        .pipe(plumber())
        .pipe(sourcemaps.init({largeFile: true})) //То же самое что и с js
        .pipe(sass().on('error', sass.logError)) //Скомпилируем
        .pipe(sassUnicode())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(pxtorem())
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(path.build.style)) //И в build
});

gulp.task('styleTheme.min:build', function () {
    gulp.src(path.src.styleTheme) //Выберем наш system.scss
        .pipe(plumber())
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass().on('error', sass.logError)) //Скомпилируем
        .pipe(sassUnicode())
        .pipe(cssnano({zindex: false})) //Сожмем
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(pxtorem())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(''))
        .pipe(duration('style.min:build time'))
        .pipe(gulp.dest(path.build.style)) //И в build
        .pipe(browserSync.stream())
});

gulp.task('styleVendors.min:build', function () {
    gulp.src(path.src.styleVendors) //Выберем наш system.scss
        .pipe(plumber())
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass().on('error', sass.logError)) //Скомпилируем
        .pipe(sassUnicode())
        .pipe(cssnano({zindex: false})) //Сожмем
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(pxtorem())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(''))
        .pipe(duration('style.min:build time'))
        .pipe(gulp.dest(path.build.style)) //И в build
        .pipe(browserSync.stream())
});

gulp.task('img:build', function () {
    var imagemin = require('gulp-imagemin'),
        imageminGifsicle = require('imagemin-gifsicle'),
        imageminJpegtran = require('imagemin-jpegtran'),
        imageminOptipng = require('imagemin-optipng'),
        imageminSvgo = require('imagemin-svgo');

    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(changed(path.build.img))
        .pipe(plumber())
        .pipe(imagemin([
            imageminGifsicle({interlaced: true}),
            imageminJpegtran({progressive: true}),
            imageminOptipng({optimizationLevel: 5}),
            imageminSvgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
});

gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.build.fonts)) //Выплюнем их в папку build
});

gulp.task('bowerSCSS:build', function() {
    var    condition = '!**/_*.scss';

    return gulp.src(mainBowerFiles('**/*.scss'), {base: './bower_components'})
        .pipe(debug({title: 'bowerSCSS:build'}))
        .pipe(gulpif(condition, rename({prefix: "_"})))
        .pipe(rename(function (path) {
            var pathTheme = path.dirname;
            pathTheme = pathTheme.replace("\\scss", "\\");
            path.dirname = pathTheme;
        }))
        .pipe(debug({title: 'bowerSCSS:build'}))
        .pipe(gulp.dest(path.bower.scssVendors))
});

// Bootstrap UI

var bootstrapPath = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/bootstrap_ui',
        js: 'dist/bootstrap_ui/js/',
        css: 'dist/bootstrap_ui/css/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/bootstrap_ui/*.html',
        js: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/popper.js/dist/umd/popper.js',
            'node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js',
            'node_modules/holderjs/holder.js',
            'src/bootstrap_ui/js/prism-min.js',
            'src/bootstrap_ui/js/script.js'
        ],
        css: 'src/bootstrap_ui/css/*.css'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/bootstrap_ui/**/*.html',
        js: 'src/bootstrap_ui/js/**/*.js',
        css: 'src/bootstrap_ui/css/**/*.*'
    },
    browser: {
        html: 'dist/bootstrap_ui/**/*.html',
        js: 'dist/bootstrap_ui/js/**/*.js',
        css: 'dist/bootstrap_ui/css/*.css'
    }
};

gulp.task('bsHtml:build', function () {
    gulp.src(bootstrapPath.src.html)
        .pipe(plumber())
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(bootstrapPath.build.html))
});

gulp.task('bsJs:build', function () {
    gulp.src(bootstrapPath.src.js)
        .pipe(plumber())
        .pipe(gulp.dest(bootstrapPath.build.js));
});

gulp.task('bsCss:build', function () {
    gulp.src(bootstrapPath.src.css) //Выберем наш system.scss
        .pipe(plumber())
        .pipe(duration('style.min:build time'))
        .pipe(gulp.dest(bootstrapPath.build.css)); //И в build
});

gulp.task('frep', function () {
    var frep = require('gulp-frep');

    var replacements = {
        '<': '&lt;',
        '>': '&gt;'
    };

    gulp.src('./src/bootstrap_ui/html/component/*.html')
        .pipe(frep(replacements))
        .pipe(gulp.dest('./src/bootstrap_ui/html/component/precode/'));
});

gulp.task('bsBuild', [
    'bsHtml:build',
    'bsJs:build',
    'bsCss:build'
]);

gulp.task('bsWatch', function () {
    gulp.watch(bootstrapPath.watch.html, ['bsHtml:build']);
    gulp.watch(bootstrapPath.watch.js, ['bsJs:build']);
    gulp.watch(bootstrapPath.watch.css, ['bsCss:build']);

    // gulp.watch(bootstrapPath.browser.js).on("change", browserSync.reload);
    // gulp.watch(bootstrapPath.browser.html).on('change', browserSync.reload);
});

gulp.task('bsDefault', ['bsBuild', 'bsWatch']);


// END Bootstrap UI


gulp.task('build', [
    'html:build',
    'php:build',
    'js:build',
    'styleTheme:build',
    'styleTheme.min:build',
    'styleVendors:build',
    'styleVendors.min:build',
    'fonts:build',
    'img:build'
]);

gulp.task('watch', function () {
    gulp.watch(path.watch.php, ['php:build']);
    gulp.watch(path.watch.html, ['html:build']);
    gulp.watch(path.watch.styleTheme, ['styleTheme:build']);
    gulp.watch(path.watch.styleVendors, ['styleVendors:build']);
    gulp.watch(path.watch.styleTheme, ['styleTheme.min:build']);
    gulp.watch(path.watch.styleVendors, ['styleVendors.min:build']);
    gulp.watch(path.watch.js, ['js:build']);
    gulp.watch(path.watch.img, ['img:build']);
    gulp.watch(path.watch.fonts, ['fonts:build']);

    gulp.watch(path.browser.js).on("change", browserSync.reload);
    gulp.watch(path.browser.html).on('change', browserSync.reload);
    gulp.watch(path.browser.style).on('change', browserSync.reload);
});

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

gulp.task('ftp', ['build', 'ftp-deploy', 'ftp-deploy-watch', 'watch']);
/* FTP End **/

// TEST BLOCK/////////////////////
//////////////////////////////////

gulp.task('zip', function() {
    var zip = require('gulp-zip');
    gulp.src([
        'dist/js/**/*.js',
        'dist/css/**/*.css'
    ])
        .pipe(zip('archives.zip'))
        .pipe(gulp.dest('dist'))
});

//////////////////////////////////
// TEST BLOCK END/////////////////

gulp.task('clean', function () {
    return del([
        path.clean.all
    ]);
});

gulp.task('default', ['browser-sync', 'build', 'watch']);