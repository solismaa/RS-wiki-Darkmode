// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('./.less/Darkmode.less')
        .pipe(less())
        .pipe(gulp.dest('./'))
});

gulp.task('autoCompile', ['less'], function() {
    gulp.watch('./.less/*.less', ['less']);
})