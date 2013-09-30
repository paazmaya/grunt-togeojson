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
      
      var kml = grunt.file.read(file.src);
      var dom = jsdom(kml);
      var geo = togeojson.kml(dom);

      var data = JSON.stringify(geo, { styles: true });

      grunt.file.write(file.dest, data);

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
