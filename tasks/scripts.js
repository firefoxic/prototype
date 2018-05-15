/* eslint-env node */

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const remember = require('gulp-remember');
const gulpIf = require('gulp-if');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cached = require('gulp-cached');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = () => (
  gulp.src('source/scripts/**')
    .pipe(plumber({ errorHandler: notify.onError() }))
    .pipe(cached('scripts'))
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(babel())
    .pipe(remember('scripts'))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest('build/scripts'))
);
