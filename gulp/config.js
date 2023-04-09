import currentDate from '../core/current-date';

const path = {
  pug: {
    src: [
      'src/blocks/pages/*/*.pug',
      '!src/blocks/pages/_example/_example.pug',
    ],
    dist: 'dist',
    watch: ['!src/blocks/pages/**/*.pug', 'src/blocks/**/*.pug'],
    wathchPages: 'src/blocks/pages/**/*.pug',
  },
  data: {
    src: 'src/blocks/**/*.json',
    dist: 'dist/data/',
    watch: 'src/blocks/**/*.json',
    name: 'data.json',
  },
  scripts: {
    seperate: {
      src: '',
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
      'src/blocks/**/**/*.js',
    ],
  },
  styles: {
    theme: {
      src: 'src/scss/theme.scss',
      watch: [
        'src/blocks/**/*.scss',
        'src/blocks/**/**/*.scss',
        'src/scss/theme.scss',
        'src/scss/theme/**/*.scss',
        'src/scss/sprite/*.scss',
        'src/scss/config/*.scss',
      ],
    },
    vendors: {
      src: 'src/scss/system.scss',
      watch: [
        'src/scss/system.scss',
        'src/scss/vendors/**/*.scss',
        'src/scss/config/*.scss',
      ],
    },
    production: {
      src: 'src/scss/app.scss',
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
    watch: 'src/img/svg-icon/*.svg',
  },
  fonts: {
    src: 'src/fonts/**/*.*',
    dist: 'dist/fonts',
    watch: 'src/fonts/*.*',
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
