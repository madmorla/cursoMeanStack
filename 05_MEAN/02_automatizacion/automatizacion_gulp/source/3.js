// var gulp = require('gulp');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');

var [gulp, concat, uglify] = [require("gulp"), require("gulp-concat"), require("gulp-uglify")]

gulp.task('demo', function() {
    gulp.src('source/*.js')
        .pipe(concat('todo.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
});