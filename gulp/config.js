module.exports = {
    path: {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: 'dist/',
            pug: 'dist/',
            js: 'dist/js/',
            style: 'dist/css/',
            img: 'dist/img/',
            svgIcon: 'src/img/svg/',
            fonts: 'dist/fonts/'
        },
        src: { //Пути откуда брать исходники
            html: 'src/html/*.html',
            pug: 'src/pug/*.pug',
            jsSeparate: ['src/js/separate/*.js', 'node_modules/holderjs/holder.js'], // статичные js файлы
            jsConcat: [
                'src/js/concat/popper.js',
                'src/js/concat/bootstrap/util.js',
                'src/js/concat/bootstrap/alert.js',
                'src/js/concat/bootstrap/button.js',
                'src/js/concat/bootstrap/carousel.js',
                'src/js/concat/bootstrap/collapse.js',
                'src/js/concat/bootstrap/dropdown.js',
                'src/js/concat/bootstrap/modal.js',
                'src/js/concat/bootstrap/scrollspy.js',
                'src/js/concat/bootstrap/tab.js',
                'src/js/concat/bootstrap/tooltip.js',
                'src/js/concat/bootstrap/popover.js',
                'node_modules/owl.carousel/dist/owl.carousel.js',
                'node_modules/jquery.dotdotdot/dist/jquery.dotdotdot.js',
                'src/js/concat/*.js',
                'src/js/setting.js'],
            styleTheme: 'src/sass/theme.scss',
            styleVendors: 'src/sass/system.scss',
            img: ['src/img/**/*.+(png|jpg|jpeg|gif|svg)', '!src/img/svg*/**'],
            svgIcon: 'src/img/svg-icon/*.svg',
            fonts: 'src/fonts/**/*.*'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: 'src/**/*.html',
            pug: 'src/pug/**/*.*',
            js: 'src/js/**/*.js',
            styleTheme: ['src/sass/theme.scss','src/sass/theme/**/*.scss', 'src/sass/config/*.scss'],
            styleVendors: ['src/sass/system.scss', 'src/sass/vendors/**/*.scss', 'src/sass/config/*.scss'],
            img: ['src/img/**/*.+(png|jpg|jpeg|gif|svg)', '!src/img/svg*/**'],
            svgIcon: 'src/img/svg-icon/*.svg',
            fonts: 'src/fonts/**/*.*'
        },
        browser: {
            html: 'dist/**/*.html',
            pug: 'dist/**/*.pug',
            js: 'dist/js/**/*.js',
            style: 'dist/css/**/*.*',
            img: ['src/img/**/*.+(png|jpg|jpeg|gif|svg)', '!src/img/svg*/**'],
            svgIcon: 'src/img/svg-icon/*.svg',
            fonts: 'dist/fonts/**/*.*'
        },
        clean: {
            html: 'dist/*.html',
            js: 'dist/js/',
            style: 'dist/css/',
            img: 'dist/img/',
            svg: 'src/sass/sprite/_sprite.scss',
            fonts: 'dist/fonts/'
        }
    }
};