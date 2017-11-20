/* eslint-env node */

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

module.exports = () => (
  gulp.src('source/styles/*.css')
    .pipe(plumber({ errorHandler: notify.onError() }))
    .pipe(postcss())
    .pipe(gulp.dest('build/styles'))
);
