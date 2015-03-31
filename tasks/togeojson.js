/**
 * grunt-togeojson
 * https://github.com/paazmaya/grunt-togeojson
 *
 * Copyright (c) Juga Paazmaya <olavic@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

var togeojson = require('togeojson'),
  topojson = require('topojson'),
  Pbf = require('pbf'),
  geobuf = require('geobuf'),
  jsdom = require('jsdom').jsdom;

module.exports = function gruntTogeojson(grunt) {

  grunt.registerMultiTask('togeojson',
    'Convert KML and GPX files to GeoJSON and TopoJSON',
    function register() {

    var options = this.options({
      input: 'auto',
      output: 'geojson',
      compress: false
    }),
    count = 0;

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
        }

        var data,
          encoding = 'utf8';
        if (options.compress) {
          encoding = null;
          data = geobuf.encode(geo, new Pbf());
        }
        else {
          data = JSON.stringify(geo, null, '  ');
        }

        var dest = file.dest;

        if (options.rename) {
          dest = options.rename(src, dest, options.output);
        }

        grunt.file.write(dest, data, {encoding: encoding});

        count++;
      });
    });

    grunt.log.ok(count + ' ' + grunt.util.pluralize(count, 'file/files') + ' converted.');
  });
};
