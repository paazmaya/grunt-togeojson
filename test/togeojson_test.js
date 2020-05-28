/**
 * grunt-togeojson
 * https://github.com/paazmaya/grunt-togeojson
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */



const fs = require('fs'),
  grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
exports.togeojson = {

  testGeojson: function(test) {
    test.expect(1);

    const actual = grunt.file.read('tmp/Naginata.json').trim();
    const expected = grunt.file.read('test/expected/Naginata.json').trim();
    test.equal(actual, expected, 'GeoJSON conversion failed.');

    test.done();
  },

  testTopojson: function(test) {
    test.expect(1);

    const actual = grunt.file.read('tmp/Naginata.topo').trim();
    const expected = grunt.file.read('test/expected/Naginata.topo').trim();
    test.equal(actual, expected, 'TopoJSON conversion failed.');

    test.done();
  },

  testGeobuf: function(test) {
    test.expect(1);

    const actual = fs.readFileSync('tmp/Naginata.geobuf', null);
    test.equal(actual.length, 615, 'Geobuf/GeoJSON conversion failed.');

    test.done();
  }

};
