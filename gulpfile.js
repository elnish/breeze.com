var gulp = require('gulp'),
    scss = require('gulp-sass');

gulp.task('scss', () => {
    return gulp.src('src/scss/style.scss')
        .pipe(scss())
        .pipe(gulp.dest('src/css'))
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch', () => {
    gulp.watch('src/scss/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('scss', 'watch'));