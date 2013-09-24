# grunt-togeojson

> Grunt task for converting KML and GPX files to GeoJSON

## Getting Started
This plugin requires Grunt `~0.4.1`

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

Since this plugin is not a multi task, you can place the files 
directly in the base object.

```js
grunt.initConfig({
  togeojson: {
    files: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

There are no options.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with
whatever. 
So if the `testing` file has the content `Testing` and the `123` 
file had the content `1 2 3`, the generated result would be 
`Testing, 1 2 3.`

```js
grunt.initConfig({
  togeojson: {
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing 
coding style. Add unit tests for any new or changed functionality. 
Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
