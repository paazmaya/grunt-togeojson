# grunt-togeojson

> Grunt task for converting KML and GPX files to GeoJSON and TopoJSON

[![Build Status](https://img.shields.io/travis/paazmaya/grunt-togeojson.svg?style=flat-square)](https://travis-ci.com/paazmaya/grunt-togeojson)
[![Maintainability](https://api.codeclimate.com/v1/badges/3e930f34e451f7729c97/maintainability)](https://codeclimate.com/github/paazmaya/grunt-togeojson/maintainability)
[![dependencies Status](https://david-dm.org/paazmaya/grunt-togeojson/status.svg)](https://david-dm.org/paazmaya/grunt-togeojson)
[![Built with Grunt](http://img.shields.io/badge/Grunt-1.0-blue.svg?style=flat-square)](http://gruntjs.com/)

## Getting Started

This Grunt task runner plugin uses [Grunt](http://gruntjs.com/),
[toGeoJSON](https://github.com/mapbox/togeojson),
[TopoJSON](https://github.com/mbostock/topojson),
[Geobuf](https://github.com/mapbox/geobuf),
and [jsdom](https://github.com/tmpvar/jsdom).

Please note that the minimum version of [Node.js](https://nodejs.org/en/) required is `14.15.0`, which is [the active Long Term Support (LTS) version](https://github.com/nodejs/Release#release-schedule),
starting from the release `4.0.0` of this plugin.

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

#### options.rename

Type: `Function`

Default value: `null`

Parameters: `src` (source file path), `dest` (destination file path), `options.output`

Returns: `String`

The function should return a string of the new destination path for the file

## Contributing

["A Beginner's Guide to Open Source: The Best Advice for Making your First Contribution"](http://www.erikaheidi.com/blog/a-beginners-guide-to-open-source-the-best-advice-for-making-your-first-contribution/).

[Also there is a blog post about "45 Github Issues Dos and Don’ts"](https://davidwalsh.name/45-github-issues-dos-donts).

Linting is done with [ESLint](http://eslint.org) and can be executed with `npm run lint`.
There should be no errors appearing after any JavaScript file changes.

## Release History

[Changes happening across different versions and upcoming changes are tracked in the `CHANGELOG.md` file.](CHANGELOG.md)

## License

Copyright (c) [Juga Paazmaya](https://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under the [MIT license](LICENSE).
