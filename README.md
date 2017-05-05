# more-prettier [![NPM version](https://img.shields.io/npm/v/more-prettier.svg?style=flat)](https://www.npmjs.com/package/more-prettier) [![NPM monthly downloads](https://img.shields.io/npm/dm/more-prettier.svg?style=flat)](https://npmjs.org/package/more-prettier) [![NPM total downloads](https://img.shields.io/npm/dt/more-prettier.svg?style=flat)](https://npmjs.org/package/more-prettier)

> CLI for running [prettier](https://github.com/prettier/prettier) with opinionated defaults.

## Install

Install globally with [npm](https://www.npmjs.com/)

```sh
$ npm install --global more-prettier
```

## Usage

```sh
# overwrites foo.js
$ fix foo.js
# write to a different destination file
$ fix foo.js bar.js
```

## Options

Defaults used:

```js
var defaults = {
  // Indent lines with tabs
  useTabs: false,

  // Fit code within this line limit
  printWidth: 80,

  // Number of spaces it should use per tab
  tabWidth: 2,

  // If true, will use single instead of double quotes
  singleQuote: true,

  // Controls the printing of trailing commas wherever possible. Valid options:
  // 'none' - No trailing commas
  // 'es5'  - Trailing commas where valid in ES5 (objects, arrays, etc)
  // 'all'  - Trailing commas wherever possible (function arguments)
  //
  // NOTE: Above is only available in 0.19.0 and above. Previously this was
  // a boolean argument.
  trailingComma: 'none',

  // Controls the printing of spaces inside object literals
  bracketSpacing: true,

  // If true, puts the `>` of a multi-line jsx element at the end of
  // the last line instead of being alone on the next line
  jsxBracketSameLine: false,

  // Which parser to use. Valid options are 'flow' and 'babylon'
  parser: 'babylon',

  // Whether to add a semicolon at the end of every line (semi: true),
  // or only at the beginning of lines that may introduce ASI failures (semi: false)
  semi: true
};
```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on May 05, 2017._