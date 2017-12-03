module.exports = {
    path: {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: 'dist/',
            js: 'dist/js/',
            style: 'dist/css/',
            img: 'dist/img/',
            fonts: 'dist/fonts/'
        },
        src: { //Пути откуда брать исходники
            html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            jsSeparate: ['src/js/separate/*.js', 'node_modules/holderjs/holder.js'], // статичные js файлы
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
                'src/js/concat/*.js',
                'src/js/setting.js'],
            styleTheme: 'src/sass/theme.scss',
            styleVendors: 'src/sass/system.scss',
            img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            fonts: 'src/fonts/**/*.*'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            styleTheme: ['src/sass/theme/**/*.scss', 'src/sass/config/*.scss'],
            styleVendors: ['src/sass/vendors/**/*.scss', 'src/sass/config/*.scss'],
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        browser: {
            html: 'dist/**/*.html',
            js: 'dist/js/**/*.js',
            style: 'dist/css/**/*.*',
            img: 'dist/img/**/*.*',
            fonts: 'dist/fonts/**/*.*'
        },
        clean: {
            all: './dist'
        }
    }
};