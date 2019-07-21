import currentDate from '../core/current-date';

const path = {
  pug: {
    src: [
      'src/blocks/pages/**/*.pug',
      '!src/blocks/pages/_example/_example.pug',
    ],
    dist: 'dist',
    watch: 'src/blocks/**/*.pug',
  },
  data: {
    src: 'src/blocks/**/*.json',
    dist: 'dist/data/',
    watch: 'src/blocks/**/*.json',
    name: 'data.json',
  },
  scripts: {
    seperate: {
      src: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/holderjs/holder.js',
      ],
    },
    concat: {
      src: [
        'src/js/concat/*.js',
        'src/js/app.js',
      ],
    },
    dist: 'dist/js',
    watch: [
      'src/js/**/*.js',
      'src/blocks/**/*.js',
    ],
  },
  styles: {
    theme: {
      src: 'src/sass/theme.scss',
      watch: [
        'src/sass/theme.scss',
        'src/sass/theme/**/*.scss',
        'src/sass/config/*.scss',
      ],
    },
    vendors: {
      src: 'src/sass/system.scss',
      watch: [
        'src/sass/system.scss',
        'src/sass/vendors/**/*.scss',
        'src/sass/config/*.scss',
      ],
    },
    production: {
      src: 'src/sass/app.scss',
    },
    dist: 'dist/css',

  },
  images: {
    src: [
      'src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      '!src/img/svg/*.svg',
      '!src/img/svg-icon/*.svg',
      '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
    ],
    dist: 'dist/img',
    watch: [
      'src/img/**/*.+(png|jpg|jpeg|gif|svg)',
      '!src/img/svg*/**',
    ],
  },
  favicons: {
    src: './src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
    dist: './dist/img/favicons/',
  },
  sprites: {
    src: 'src/img/svg-icon/*.svg',
    dist: 'src/img/svg/',
    watch: 'src/fonts/**/*.*',
  },
  fonts: {
    src: 'src/fonts/**/*.*',
    dist: 'dist/fonts',
    watch: 'src/img/svg-icon/*.svg',
  },
  clean: {
    dist: 'dist',
  },
  zip: {
    src: 'dist/**/**',
    dist: 'zip',
  },
};

export { path, currentDate };
