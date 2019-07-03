module.exports = {
    path: {
        build: {
            html: 'dist/',
            pug: 'dist/',
            js: 'dist/js/',
            style: 'dist/css/',
            img: 'dist/img/',
            svg: 'src/img/svg/',
            fonts: 'dist/fonts/'
        },
        src: {
            html: 'src/html/*.html',
            pug: 'src/pug/*.pug',
            jsSeparate: ['src/js/separate/*.js', 'node_modules/holderjs/holder.js'],
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
                'node_modules/jquery.dotdotdot/dist/jquery.dotdotdot.js',
                'src/js/concat/*.js',
                'src/js/setting.js'],
            styleTheme: 'src/sass/theme.scss',
            styleVendors: 'src/sass/system.scss',
            img: 'src/img/**/*.+(jpg|jpeg|png)',
            svg: 'src/img/svg-sprite/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        watch: {
            html: 'src/**/*.html',
            pug: 'src/pug/**/*.*',
            js: 'src/js/**/*.js',
            styleTheme: ['src/sass/theme.scss','src/sass/theme/**/*.scss', 'src/sass/config/*.scss'],
            styleVendors: ['src/sass/system.scss', 'src/sass/vendors/**/*.scss', 'src/sass/config/*.scss'],
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        browser: {
            html: 'dist/**/*.html',
            pug: 'dist/**/*.pug',
            js: 'dist/js/**/*.js',
            style: 'dist/css/**/*.*',
            img: 'dist/img/**/*.*',
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