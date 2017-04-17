// var gulp = require('gulp');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');

var [gulp, concat, uglify] = [require("gulp"), require("gulp-concat"), require("gulp-uglify")]

gulp.task("default", tareasEnComprimir);
gulp.watch('source/*.js', tareasEnComprimir);

function tareasEnComprimir(fichero) { //fichero es un argumento que se pasa por comando, si no se pasa es undefined
    //GLOB
    var glob = gulp.src(["source/*.js", "!source/3.js"]);

    glob.pipe(concat("funciones.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("build/"));

    console.log("Modificando con Gulp: " + fichero.path);
}

/*
gulp.task('demo', function() {
    gulp.src('source/*.js')
        .pipe(concat('todo.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
});
*/