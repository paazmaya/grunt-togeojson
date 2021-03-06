/**
 * grunt-togeojson
 * https://github.com/paazmaya/grunt-togeojson
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */


const togeojson = require('@mapbox/togeojson'),
  topojson = require('topojson-server'),
  Pbf = require('pbf'),
  geobuf = require('geobuf'),
  {
    JSDOM
  } = require('jsdom');

module.exports = function gruntTogeojson(grunt) {

  grunt.registerMultiTask('togeojson', 'Convert KML and GPX files to GeoJSON and TopoJSON', function register() {

    const options = this.options({
      input: 'auto',
      output: 'geojson',
      compress: false,
      rename: null
    });

    let count = 0;

    this.files.forEach(function filesEach(file) {
      let method = 'kml';

      file.src.forEach(function srcEach(src) {

        if (options.input === 'auto') {
          method = src.match(/\.gpx$/iu) ?
            'gpx' :
            'kml';
        }
        else if (Object.prototype.hasOwnProperty.call(togeojson, options.input) &&
          typeof togeojson[options.input] === 'function') {
          method = options.input;
        }
        else {
          grunt.fail.warn('No suitable input method selected');
        }

        const original = grunt.file.read(src),
          dom = new JSDOM(original).window.document;

        let geo = togeojson[method](dom);

        if (options.output === 'topojson') {
          geo = topojson.topology({
            features: geo
          });

          if (options.compress) {
            grunt.fail.warn('Geobuf compression is not supported for TopoJSON');
          }
        }

        let data,
          encoding = 'utf8'; // string content
        if (options.compress) {
          encoding = null; // binary content
          data = Buffer.from(geobuf.encode(geo, new Pbf()));
        }
        else {
          data = JSON.stringify(geo, null, '  ');
        }

        let {
          dest
        } = file;

        if (typeof options.rename === 'function') {
          dest = options.rename(src, dest, options.output);
        }

        grunt.file.write(dest, data, {
          encoding: encoding
        });

        count++;
      });
    });

    grunt.log.ok(count + ' ' + grunt.util.pluralize(count, 'file/files') + ' converted.');
  });
};
