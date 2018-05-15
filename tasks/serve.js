/* eslint-env node */

const browserSync = require('browser-sync').create();

module.exports = () => {
  browserSync.init({
    server: {
      baseDir: 'build/'
    }
  });
  browserSync.watch('build/**/*.*')
    .on('change', browserSync.reload);
};
