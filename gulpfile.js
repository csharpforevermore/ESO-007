const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const copy = require('gulp-copy');
const through = require('through2');

//compile scss into css
function style() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
           baseDir: "./src",
           index: "/index.html"
        }
    });

    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('src/*.html').on('change',browserSync.reload);
    gulp.watch('src/*.htm').on('change',browserSync.reload);
    gulp.watch('src/scripts/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;


function copyFunction() {
    var sourceFiles = ['./node_modules/jquery/jquery.min.js', './node_modules/jquery/jquery.js'];
    var destination = './src/scripts/';
    
    return gulp.src(sourceFiles)
            .pipe(gulp.dest(destination));
    
}



gulp.task(copyFunction, copyFunction);