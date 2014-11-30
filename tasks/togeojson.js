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
    jsdom = require('jsdom').jsdom;

  grunt.registerMultiTask('togeojson', 'Convert KML and GPX files to GeoJSON', function register() {

    this.files.forEach(function filesEach(file) {
      file.src.forEach(function srcEach(src) {
        var method = src.match(/\.gpx$/i) ? 'gpx' : 'kml';

        var original = grunt.file.read(src);
        var dom = jsdom(original);
        var geo = togeojson[method](dom);

        var data = JSON.stringify(geo, null, '\t');

        grunt.file.write(file.dest, data);

        grunt.log.writeln('File \'' + file.dest + '\' created.');
      });
    });
  });

};
