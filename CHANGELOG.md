# Version history for grunt-togeojson

This changelog covers the version history and possible upcoming changes.
It follows the guidance from https://keepachangelog.com/en/1.0.0/.

## Unreleased
- Minimum supported Node.js version lifted from `10.13.0` to `14.15.0`
- Travis CI tests now only v14 due to free version limitations

## `v4.0.0` (2020-05-28)
- Minimum Node.js version lifted from `8.11.1` to `10.13.0`
- Dependencies updated of course :tophat:
- Run tests with versions 10, 12, and 14 of Node.js at Travis CI

## `v3.0.0` (2018-11-10)
- **TopoJSON behaves differently, check your output after updating to this release**
- Add `options.rename` #9
- Several API changes in the updated dependencies have been migrated, such as JSDOM
- Minimum Node.js version lifted from `4.2.0` to `8.11.1`
- `main` property in `package.json` was pointing to a wrong file
- Migrated from deprecated `togeojson` to `@mapbox/togeojson`, which was merely a package name change

## `v2.2.0` (2016-08-10)
- Dependencies are sure :tophat: up to date
- Use shared ESLint configuration and ESLint directly without the Grunt.js plugin

## `v2.1.0` (2016-04-05)
- Update dependencies and remove `grunt-cli` from `devDependencies` as it is in `grunt` now

## `v2.0.1` (2016-02-22)
- [Grunt.js 1.0.0](http://gruntjs.com/blog/2016-02-11-grunt-1.0.0-rc1-released) is coming out soon, so its use has been tested
- Dependencies updated

## `v2.0.0` (2015-10-28)
- Upgraded to `jsdom` v7, which means to force using Node.js 4.2.0 (LTS)

## `v1.1.0` (2015-05-05)
- Remove Geobuf/TopoJSON combination since it is not supported

## `v1.0.0` (2015-01-27)
- Conversion to TopoJSON and Geobuf added

## `v0.1.0` (2013-09-30)
- Initial release
