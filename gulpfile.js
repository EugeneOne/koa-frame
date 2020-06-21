const gulp = require('gulp');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');

var jsScript = 'node';
if (
  process.env.npm_config_argv !== undefined &&
  process.env.npm_config_argv.indexOf('debug') > 0
) {
  jsScript = 'node debug';
}

gulp.task('nodemon', function () {
  return nodemon({
    script: 'build/dev-server.js',
    execMap: {
      js: jsScript,
    },
    verbose: true,
    ignore: [
      'build/*.js',
      'dist/*.js',
      'nodemon.json',
      '.git',
      'node_modules/**/node_modules',
      'gulpfile.js',
    ],
    env: {
      NODE_ENV: 'development',
    },
    ext: 'js json',
  });
});
