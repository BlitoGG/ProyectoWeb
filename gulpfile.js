/*
* Dependencias
*/
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    htmlhint = require("gulp-htmlhint"),
    htmlmin = require('gulp-html-minifier2'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    merge=require('gulp-merge-link');

/*
* Configuración de tareas
*/
gulp.task('js', function () {
  gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('html',function(){
    gulp.src("./*.html")
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(htmlmin({collapseWhitespace: true,removeComments:true}))
        .pipe(gulp.dest('./dist'))
});

gulp.task('templates',function(){
    gulp.src("./templates/*.html")
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(htmlmin({collapseWhitespace: true,removeComments:true}))
        .pipe(gulp.dest('./dist/templates'))
});

gulp.task('css',function(){
    gulp.src("./css/*.css")
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css'));

});

gulp.task('default',['js','css','templates','html']);
