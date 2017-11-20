/* eslint-env node */

const gulp = require('gulp');
const newer = require('gulp-newer');
const image = require('gulp-image');

module.exports = () => (
  gulp.src('source/assets/images/**/*.*')
    .pipe(newer('build/assets/images'))
    .pipe(image({
      mozjpeg: false,
      jpegoptim: false,
      jpegRecompress: true
    }))
    .pipe(gulp.dest('build/assets/images'))
);
