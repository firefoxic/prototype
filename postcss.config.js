const stylelint = require('stylelint');

module.exports = ctx => ({
  'map': ctx.env !== 'production',
  'plugins': {
    'postcss-import': {
      'plugins': [
        stylelint
      ]
    },
    'postcss-advanced-variables': {},
    'postcss-url': {},
    'autoprefixer': {},
    'postcss-nesting': {},
    'postcss-custom-media': {},
    'css-mqpacker': {
      'sort': true
    },
    'postcss-csso': {},
    'postcss-browser-reporter': {},
    'postcss-reporter': {
      'clearReportedMessages': true
    },
  }
});
