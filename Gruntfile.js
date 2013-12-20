/*
 * grunt-togeojson
 * https://github.com/paazmaya/grunt-togeojson
 *
 * Copyright (c) 2013 Juga Paazmaya
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      options: {
        config: 'eslint.json'
      },
      target: [
        'Gruntfile.js',
        'karma.conf.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    togeojson: {
      naginata: {
        files: {
          'tmp/Naginata.json': ['test/fixtures/Naginata.kml']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },
    
    // Code coverage
    karma: {
      coverage: {
        configFile: 'karma.conf.js'
      }
    },
    
    // Coverage data to coveralls.io
    coveralls: {
      options: {
        coverage_dir: 'coverage'
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.  
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'togeojson', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['eslint', 'test', 'karma']);

};
