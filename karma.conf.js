module.exports = function(config) {
  'use strict';
  config.set({
    basePath: '',
    frameworks: ['nodeunit'],
    files: [
      'node_modules/karma-nodeunit/lib/nodeunit.js',
      'node_modules/karma-nodeunit/lib/adapter.js',
      'tasks/*.js',
      'test/*_test.js'
    ],
    browsers: ['PhantomJS'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: { 'tasks/*.js': ['coverage'] }
  });
};