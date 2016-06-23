var gulp = require('gulp');
var sass = require('gulp-sass');
//var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    gulp.src('App/**/*.scss')
        .pipe(sass({
            sourceComments: true,
            outputStyle: 'expanded',
            errLogToConsole: true
        }))
        .pipe(gulp.dest('App/Generate/Css'))
        /*.pipe(browserSync.reload({
            stream: true
        }));*/
});

gulp.task('watch', ['sass'], function () {
    gulp.watch('App/**/*.scss', ['sass']);
    // Other watchers
});