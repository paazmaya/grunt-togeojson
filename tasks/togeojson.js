/**
 * grunt-togeojson
 * https://github.com/paazmaya/grunt-togeojson
 *
 * Copyright (c) Juga Paazmaya <olavic@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function gruntTogeojson(grunt) {

  var togeojson = require('togeojson'),
    topojson = require('topojson'),
    jsdom = require('jsdom').jsdom;

  grunt.registerMultiTask('togeojson', 'Convert KML and GPX files to GeoJSON and TopoJSON', function register() {

    var options = this.options({
      input: 'auto',
      output: 'geojson'
    });

    this.files.forEach(function filesEach(file) {
      var method = 'kml';
      file.src.forEach(function srcEach(src) {
        if (options.input === 'auto') {
          method = src.match(/\.gpx$/i) ? 'gpx' : 'kml';
        }
        else if (togeojson.hasOwnProperty(options.input) &&
          typeof togeojson[options.input] == 'function') {
          method = options.input;
        }
        else {
          // No suitable input method selected.
        }

        var original = grunt.file.read(src);
        var dom = jsdom(original);
        var geo = togeojson[method](dom);

        if (options.output === 'topojson') {
          geo = topojson.topology(geo);
        }

        var data = JSON.stringify(geo, null, '\t');

        grunt.file.write(file.dest, data);
      });
    });
  });

};
