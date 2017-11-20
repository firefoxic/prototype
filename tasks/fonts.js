/* eslint-env node */

const gulp = require('gulp');
const newer = require('gulp-newer');

module.exports = () => (
  gulp.src('source/assets/fonts/**/*.*', { since: gulp.lastRun('fonts') })
    .pipe(newer('build/assets/fonts'))
    .pipe(gulp.dest('build/assets/fonts'))
);
