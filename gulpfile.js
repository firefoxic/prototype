/* eslint-disable */

const gulp = require('gulp');

const runTaskLazy = (taskName) => {
  gulp.task(taskName, cb => require(`./tasks/${taskName}`)(cb));
};

runTaskLazy('build');
runTaskLazy('clean');
runTaskLazy('default');
runTaskLazy('fonts');
runTaskLazy('icons');
runTaskLazy('images');
runTaskLazy('pages');
runTaskLazy('scripts');
runTaskLazy('serve');
runTaskLazy('styles');
runTaskLazy('watch');
