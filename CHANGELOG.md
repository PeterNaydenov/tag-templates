# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).



## 1.5.0 - ( 2026-08-12 )

### Changed
- [x] Migrated the test runner from Mocha to Vitest;
- [x] Switched the coverage provider to `coverage-v8`;

### Added
- [x] JSDoc annotations on the public library surface;
- [x] TypeScript `v7` as a dev dependency; the library now compiles
  `d.ts` files from the JSDoc comments;



## 1.4.0 - ( 2024-02-03 )

### Changed
- Converted the module from CommonJS to ES6.
- `package.json` gained an `exports` section so the package can be consumed
  as a CommonJS or ES6 module without additional configuration.
- The `dist` folder was added to the project. It includes CommonJS, UMD and
  ESM builds of the library.
- Rollup was added to the project and is used to build the library versions.

### Notes
- No changes in functionality compared to `1.3.0`;



## 1.3.0 - ( 2022-06-18 )

### Added
- [x] Support for multiline external props in render requests.



## 1.2.0 - ( 2022-06-18 )

### Added
- [x] `addTemplate` now supports external variables for template definition.
- [x] A single template can be defined by mixing two or more template strings.



## 1.0.0 - 2021-04-01

### Added
- [x] Initial Node.js module release.
- [x] Test suite.
- [x] Short documentation.


