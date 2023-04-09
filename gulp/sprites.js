import gulp from 'gulp';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import svgSprite from 'gulp-svg-sprite';
import replace from 'gulp-replace';
import { path } from './config';

gulp.task('sprites', (cb) => {
  gulp.src(path.sprites.src)
    .pipe(plumber())
    .pipe(debug({
      title: 'File Src:',
    }))
    .pipe(svgmin({
      js2svg: {
        pretty: true,
      },
    }))
    .pipe(cheerio({
      run($) {
        $('svg *').each(function svgSetting() {
          const svg = $(this);
          const stroke = svg.attr('stroke');
          const strokeWidth = svg.attr('stroke-width');
          const atrrDataWidth = 'data-width';
          const dataWidth = svg.attr(atrrDataWidth);
          const fill = svg.attr('fill');

          if (typeof stroke !== 'undefined' && stroke !== 'none') {
            svg.removeAttr('stroke');
            svg.attr('data-stroke', 'true');
            if (typeof dataWidth !== 'undefined') {
              svg.attr(atrrDataWidth, strokeWidth);
            }
          }

          if (typeof fill !== 'undefined' && fill !== 'none') {
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
      parserOptions: { xmlMode: true },
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprite.svg',
          svg: {
            xmlDeclaration: false,
            doctypeDeclaration: false,
          },
          render: {
            scss: {
              dest: '../../../scss/sprite/_sprite.scss',
              template: 'src/scss/sprite/_svg-sprite-template.scss',
            },
          },
        },
      },
    }))
    .pipe(replace('data-width', 'stroke-width'))
    .pipe(replace('data-fill-none', 'fill'))
    .pipe(gulp.dest(path.sprites.dist))
    .pipe(debug({
      title: 'File Build:',
    }));
  cb();
});
