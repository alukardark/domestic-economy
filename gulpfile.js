var gulp      = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    concat      = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify      = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
var browserSync = require('browser-sync').create();

gulp.task('sass', function(done) {
    gulp.src("assets/scss/*.scss")
        .pipe(sass({outputStyle: ''}).on('error', sass.logError))
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
    done();
});

gulp.task('scripts', function() {
    return gulp.src()
        .pipe(concat('libs.min.js')) // Собираем их в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('assets/js')); // Выгружаем в папку js
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: ""
    });

    gulp.watch("assets/scss/**/*.scss", gulp.series('sass'));
    gulp.watch("*.html").on('change', () => {
        browserSync.reload();
        done();
    });
    gulp.watch("assets/js/**/*.js").on('change', () => {
        browserSync.reload();
        done();
    });


    done();
});



gulp.task('default', gulp.series('sass', 'serve'));
