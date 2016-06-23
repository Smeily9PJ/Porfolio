var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function () {
    console.log('Hello Zell');
});

gulp.task('sass', function () {
    gulp.src('App/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('App/Generate/Css'))
        .pipe(browserSync.stream());
});

gulp.task('browserSync', function () {
    browserSync.init(null, {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('App/**/*.scss', ['sass']).on('change', browserSync.reload);
    // Other watchers
});