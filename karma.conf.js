module.exports = function(config) {
  'use strict';
  config.set({
    basePath: '',
    frameworks: ['nodeunit'],
    files: [
      'tasks/*.js',
      'test/*_test.js'
    ],
    browsers: ['PhantomJS'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: { 'tasks/*.js': ['coverage'] }
  });
};