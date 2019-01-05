var gulp = require('gulp'),
    config = require('./config.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('svgIcon', function(cb) {
    gulp.src(config.path.src.svgIcon)
        .pipe(plugin.plumber())
        .pipe(plugin.debug({
            title: 'File Src:'
        }))
        .pipe(plugin.svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(plugin.cheerio({
            run: function($, file) {
                $('svg *').each(function () {
                    var svg = $(this);
                    //
                    var stroke = svg.attr('stroke'),
                        stroke_width = svg.attr('stroke-width'),
                        data_width = svg.attr('data-width'),
                        fill = svg.attr('fill');

                    if (typeof stroke !== typeof undefined && stroke !== 'none') {
                        svg.removeAttr('stroke');
                        svg.attr('data-stroke', 'true');
                        if (typeof data_width !== typeof undefined) {
                            svg.attr('data-width', stroke_width);
                        }
                    }

                    if (typeof fill !== typeof undefined && fill !== 'none') {
                        svg.removeAttr('fill');
                        svg.attr('data-fill', 'true');

                    } else {
                        svg.attr('data-fill-none', 'none');
                    }

                });
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
        .pipe(plugin.replace('data-width', 'stroke-width'))
        .pipe(plugin.replace('data-fill-none', 'fill'))
        .pipe(gulp.dest(config.path.build.svgIcon))
        .pipe(plugin.debug({
            title: 'File Build:'
        }));
        cb();
});