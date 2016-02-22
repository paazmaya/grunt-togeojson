# grunt-togeojson

> Grunt task for converting KML and GPX files to GeoJSON and TopoJSON

[![Build Status](https://img.shields.io/travis/paazmaya/grunt-togeojson.svg?style=flat-square)](https://travis-ci.org/paazmaya/grunt-togeojson)
[![Code Climate](https://img.shields.io/codeclimate/github/paazmaya/grunt-togeojson.svg?style=flat-square)](https://codeclimate.com/github/paazmaya/grunt-togeojson)
[![Dependency Status](https://img.shields.io/gemnasium/paazmaya/grunt-togeojson.svg?style=flat-square)](https://gemnasium.com/paazmaya/grunt-togeojson)
[![Built with Grunt](http://img.shields.io/badge/Grunt-0.4-blue.svg?style=flat-square)](http://gruntjs.com/)
[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/grunt-togeojson/index?flat)](https://github.com/igrigorik/ga-beacon)


## Getting Started

This Grunt task runner plugin uses [Grunt](http://gruntjs.com/),
[toGeoJSON](https://github.com/mapbox/togeojson),
[TopoJSON](https://github.com/mbostock/topojson),
[Geobuf](https://github.com/mapbox/geobuf),
and [jsdom](https://github.com/tmpvar/jsdom).

Please note that the minimum version of [Node.js](https://nodejs.org/en/) required is `4.2.0`,
starting from the release `2.0.0` of this plugin.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to
check out the [Getting Started](http://gruntjs.com/getting-started)
guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install
and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```sh
npm install grunt-togeojson --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-togeojson');
```

## The "togeojson" task

### Overview

In your project's Gruntfile, add a section named `togeojson` to the
data object passed into `grunt.initConfig()`.

Configure the files list as [described in the multi task
section of the Grunt documentation](http://gruntjs.com/creating-tasks#multi-tasks).

```js
grunt.initConfig({
  togeojson: {
    maps: {
      files: {
        // Target-specific file lists and/or options go here.
      }
    }
  }
})
```

### Options

Conversion will use the same basename of the source file for the
destination file.

#### options.input

Type: `String`

Default value: `'auto'`

Possible values: `'auto'`, `'kml'`, `'gpx'`

The default value (`'auto'`) will determine the type based on the
input file extension, namely checking if it is `.gpx` or not.

#### options.output

Type: `String`

Default value: `'geojson'`

Possible values: `'geojson'`, `'topojson'`

Using `'topojson'` will disable `options.compress`.

#### options.compress

Type: `Boolean`

Default value: `false`

Possible values: `true`, `false`

Compress the resulting GeoJSON with Geobuf.
Please note that TopoJSON is not supported to be compressed via Geobuf.

## Contributing

[Please refer to a GitHub blog post on how to create somewhat perfect pull request.](https://github.com/blog/1943-how-to-write-the-perfect-pull-request "How to write the perfect pull request")

In lieu of a formal styleguide, take care to maintain the existing
coding style. Add unit tests for any new or changed functionality.
Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History

 * `v2.0.1` (2016-02-22)
    - [Grunt.js 1.0.0](http://gruntjs.com/blog/2016-02-11-grunt-1.0.0-rc1-released) is coming out soon, so its use has been tested
    - Dependencies updated
 * `v2.0.0` (2015-10-28)
    - Upgraded to `jsdom` v7, which means to force using Node.js 4.2.0 (LTS)
 * `v1.1.0` (2015-05-05)
    - Remove Geobuf/TopoJSON combination since it is not supported
 * `v1.0.0` (2015-01-27)
    - Conversion to TopoJSON and Geobuf added
 * `v0.1.0` (2013-09-30)
    - Initial release


## License

Copyright (c) [Juga Paazmaya](http://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under the [MIT license](LICENSE).
