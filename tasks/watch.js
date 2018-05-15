/* eslint-env node */

const gulp = require('gulp');
const cached = require('gulp-cached');
const remember = require('gulp-remember');

const delCache = (event, cacheName) => {
  if (event.type === 'deleted') {
    delete cached.caches[`${cacheName}`][event.path];
    remember.forget(`${cacheName}`, event.path);
  }
};

module.exports = () => {
  gulp.watch('source/**/*.pug', gulp.series('pages'));
  gulp.watch('source/**/*.css', gulp.series('styles'));
  gulp.watch('source/assets/fonts/**/*.*', gulp.series('fonts'));
  gulp.watch('source/assets/images/**/*.*', gulp.series('images'));
  gulp.watch('source/assets/icons/**/*.*', gulp.series('icons'))
    .on('change', (event) => {
      delCache(event, 'icons');
    });
  gulp.watch('source/scripts/**/*.*', gulp.series('scripts'))
    .on('change', (event) => {
      delCache(event, 'scripts');
    });
};
