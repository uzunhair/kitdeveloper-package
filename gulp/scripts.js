import gulp from 'gulp';
import plumber from 'gulp-plumber';
// import yargs from "yargs";
import webpackStream from 'webpack-stream';
import named from 'vinyl-named';
import { path } from './config';

// const argv = yargs.argv,
// production = !!argv.production;

gulp.task('scripts:vendors', (cb) => {
  gulp.src(path.scripts.seperate.src)
    .pipe(plumber())
    .pipe(gulp.dest(path.scripts.dist));
  cb();
});

gulp.task('scripts', (cb) => {
  gulp.src(path.scripts.concat.src)
    .pipe(plumber())
    .pipe(named())
    .pipe(webpackStream({
      mode: 'production',
      output: {
        filename: '[name].js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
          },
        ],
      },
      optimization: {
        minimize: true,
      },
      externals: {
        jquery: 'jQuery',
      },
    }))
    .pipe(gulp.dest(path.scripts.dist));
  cb();
});
