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
    plugins: [
      'karma-nodeunit',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],
    logLevel: config.LOG_DEBUG,
    browsers: ['PhantomJS'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'tasks/*.js': ['coverage']
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    }
  });
};