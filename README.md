# grunt-togeojson

> Grunt task for converting KML and GPX files to GeoJSON

[![Build Status](https://travis-ci.org/paazmaya/grunt-togeojson.png?branch=master)](https://travis-ci.org/paazmaya/grunt-togeojson)
[![Dependency Status](https://gemnasium.com/paazmaya/grunt-togeojson.png)](https://gemnasium.com/paazmaya/grunt-togeojson)
[![Coverage Status](https://coveralls.io/repos/paazmaya/grunt-togeojson/badge.png)](https://coveralls.io/r/paazmaya/grunt-togeojson)

## Getting Started

This plugin requires [Grunt](http://gruntjs.com/) `~0.4.1`,
and [toGeoJSON](https://github.com/mapbox/togeojson) `~0.3.0`
and [jsdom](https://github.com/tmpvar/jsdom) `~0.8.6` .

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to 
check out the [Getting Started](http://gruntjs.com/getting-started) 
guide, as it explains how to create a 
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install
and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```shell
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

Configure the files list as [decribed in the multi task
section of Grunt documentation](http://gruntjs.com/creating-tasks#multi-tasks).

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

There are no options.

Conversion will use the same basename of the source file for the 
destination file.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing 
coding style. Add unit tests for any new or changed functionality. 
Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History

 * 2013-10-12   v0.1.1   Coverage via karma, dependency status via Gemnasium
 * 2013-09-30   v0.1.0   Initial release

