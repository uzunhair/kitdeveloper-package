var gulp = require('gulp'),
    config = require('./config.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('svgSprite:build', function() {
    gulp.src(config.path.src.svg)
        .pipe(plugin.plumber())
        .pipe(plugin.svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(plugin.cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(plugin.replace('&gt;', '>'))
        .pipe(plugin.svgSprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg",
                    svg: {
                        xmlDeclaration: false,
                        doctypeDeclaration: false
                    },
                    render: {
                        scss: {
                            dest: '../../../sass/sprite/_sprite.scss',
                            template: "src/sass/sprite/_svg_sprite_template.scss"
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest(config.path.build.svg));
});