"use strict";

const gulp          = require("gulp");
const sass          = require('gulp-sass');
const del           = require('del');
const concat        = require('gulp-concat');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./source/scss/*.scss')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(concat('main.scss'))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('clean', function () {
    return del('./dist/css/main.css');
});

gulp.task('watch', function() {
    gulp.watch('./source/scss/*.scss', gulp.series('sass'));
});