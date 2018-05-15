/* eslint-env node */

const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

module.exports = () => (
  gulp.src('source/*.pug')
    .pipe(plumber({ errorHandler: notify.onError() }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('build'))
);
