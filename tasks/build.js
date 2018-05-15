/* eslint-env node */

const gulp = require('gulp');

module.exports = gulp.series(
  'clean',
  'pages',
  gulp.parallel(
    'fonts',
    'icons',
    'images',
    'styles',
    'scripts'
  )
);
