/**
 * grunt-togeojson
 * https://github.com/paazmaya/grunt-togeojson
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com>
 * Licensed under the MIT license.
 */

'use strict';

var togeojson = require('togeojson'),
  topojson = require('topojson'),
  Pbf = require('pbf'),
  geobuf = require('geobuf'),
  jsdom = require('jsdom').jsdom;

module.exports = function gruntTogeojson(grunt) {

  grunt.registerMultiTask('togeojson', 'Convert KML and GPX files to GeoJSON and TopoJSON', function register() {

    var options = this.options({
      input: 'auto',
      output: 'geojson',
      compress: false
    });

    this.files.forEach(function filesEach(file) {
      var method = 'kml';

      file.src.forEach(function srcEach(src) {

        if (options.input === 'auto') {
          method = src.match(/\.gpx$/i) ? 'gpx' : 'kml';
        }
        else if (togeojson.hasOwnProperty(options.input) &&
          typeof togeojson[options.input] === 'function') {
          method = options.input;
        }
        else {
          grunt.fail.warn('No suitable input method selected');
        }

        var original = grunt.file.read(src),
          dom = jsdom(original),
          geo = togeojson[method](dom);

        if (options.output === 'topojson') {
          geo = topojson.topology(geo);

          if (options.compress) {
            grunt.fail.warn('Geobuf compression is not supported for TopoJSON');
          }
        }

        var data,
          encoding = 'utf8'; // string content
        if (options.compress) {
          encoding = null; // binary content
          data = geobuf.encode(geo, new Pbf());
        }
        else {
          data = JSON.stringify(geo, null, '  ');
        }
        grunt.file.write(file.dest, data, {encoding: encoding});
      });
    });
  });

};
