module.exports = {
  path: {
    build: {
      pug: 'dist/',
      js: 'dist/js/',
      style: 'dist/css/',
      img: 'dist/img/',
      svg: 'src/img/svg/',
      fonts: 'dist/fonts/',
    },
    src: {
      pug: 'src/pug/*.pug',
      jsSeparate: ['src/js/separate/*.js'],
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
        'node_modules/owl.carousel/dist/owl.carousel.js',
        'src/js/concat/*.js',
        'src/js/setting.js'],
      styleTheme: 'src/scss/theme.scss',
      styleVendors: 'src/scss/system.scss',
      img: 'src/img/**/*.+(jpg|jpeg|png)',
      svg: 'src/img/svg-sprite/*.*',
      fonts: 'src/fonts/**/*.*',
    },
    watch: {
      pug: 'src/pug/**/*.*',
      js: 'src/js/**/*.js',
      styleTheme: ['src/scss/theme.scss', 'src/scss/theme/**/*.scss', 'src/scss/config/*.scss'],
      styleVendors: ['src/scss/system.scss', 'src/scss/vendors/**/*.scss', 'src/scss/config/*.scss'],
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*',
    },
    browser: {
      pug: 'dist/**/*.pug',
      js: 'dist/js/**/*.js',
      style: 'dist/css/**/*.*',
      img: 'dist/img/**/*.*',
      fonts: 'dist/fonts/**/*.*',
    },
    clean: {
      js: 'dist/js/',
      style: 'dist/css/',
      img: 'dist/img/',
      svg: 'src/scss/sprite/_sprite.scss',
      fonts: 'dist/fonts/',

    },
  },
};
