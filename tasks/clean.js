/* eslint-env node */

const del = require('del');

module.exports = () => (
  del([
    'build'
  ])
);
