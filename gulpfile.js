const gulp = require('gulp'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass')(require('sass'));

// Static server & watch scss + html files
gulp.task('watch', function() {

    browserSync.init({
        server: '.'
    });

    gulp.watch('./scss/**/*.scss', gulp.series("sass"));

});

// Compile Sass into CSS & inject into browsers
gulp.task('sass', function() {
return gulp.src('./scss/**/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('./css'))
.pipe(browserSync.stream());
});

