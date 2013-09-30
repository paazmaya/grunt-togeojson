/*
 * grunt-togeojson
 * https://github.com/paazmaya/grunt-togeojson
 *
 * Copyright (c) 2013 Juga Paazmaya
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var togeojson = require('togeojson'),
    jsdom = require('jsdom').jsdom;
  
  grunt.registerMultiTask('togeojson', 'Convert KML and GPX files to GeoJSON', function() {

    this.files.forEach(function(file) {
      file.src.forEach(function(src) {
        var method = src.match(/\.gpx$/i) ? 'gpx' : 'kml';
        
        var original = grunt.file.read(src);
        var dom = jsdom(original);
        var geo = togeojson[method](dom);
  
        var data = JSON.stringify(geo, null, "\t");
  
        grunt.file.write(file.dest, data);
  
        grunt.log.writeln('File "' + file.dest + '" created.');
      });
    });
  });

};
