const sass = require("gulp-sass")(require("node-sass"));
const gulp = require("gulp");
const uglifycss = require('gulp-uglifycss');
const themeKit = require('@shopify/themekit');

gulp.task('sass', async function(){
    return gulp
    .src('sass/*.scss')
    .pipe(sass().once('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('css', async function(){
    gulp.src('assets/css/*.css')
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
    gulp.watch('sass/*.scss', gulp.series("sass"));
    gulp.watch('assets/css/*.css', gulp.series("css"));
});
