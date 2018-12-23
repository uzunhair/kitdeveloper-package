var gulp = require('gulp'),
    config = require('./config.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('img:build', function (cb) {
    var imagemin = require('gulp-imagemin'),
        imageminGifsicle = require('imagemin-gifsicle'),
        imageminJpegtran = require('imagemin-jpegtran'),
        imageminOptipng = require('imagemin-optipng');
        //imageminSvgo = require('imagemin-svgo');

    gulp.src(config.path.src.img) //Выберем наши картинки
        .pipe(plugin.changed(config.path.build.img))
        .pipe(plugin.plumber())
        .pipe(imagemin([
            imageminGifsicle({interlaced: true}),
            imageminJpegtran({progressive: true}),
            imageminOptipng({optimizationLevel: 5})
           // imageminSvgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest(config.path.build.img)); //И бросим в build
  cb();
});



gulp.task('sprite', function(cb) {
    var spritesmith = require('gulp.spritesmith');
    var spriteData =
        gulp.src('./src/img/img-sprite/*.*')
            .pipe(spritesmith({
                imgName: '../img/sprite.png',
                cssName: '_sprite.scss',
                cssFormat: 'scss',
                algorithm: 'binary-tree',
                //cssTemplate: 'stylus.template.mustache',
                // cssVarMap: function(sprite) {
                //     sprite.name = 's-' + sprite.name
                // }
            }));

    spriteData.img.pipe(gulp.dest('./src/img/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./src/sass/sprite/')); // путь, куда сохраняем стили
    cb();
});