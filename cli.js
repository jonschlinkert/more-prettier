#!/usr/bin/env node

var path = require('path');
var defaults = require('./defaults');
var omit = require('object.omit');
var argv = require('minimist')(process.argv.slice(2));
var through = require('through2');
var prettier = require('prettier');
var Composer = require('composer');
var composer = new Composer();
var vfs = require('vinyl-fs');

if (argv._.length === 0) {
  console.error('please supply a source file');
  process.exit(1);
}

composer.task('default', function(cb) {
  var opts = defaults(argv);
  delete opts._;

  var src = path.resolve(argv._[0]);
  var dest = argv._[1] ? path.resolve(argv._[1]) : path.dirname(src);
  vfs.src(src)
    .pipe(through.obj(function(file, enc, next) {
      var str = file.contents.toString();
      str = prettier.format(str, opts);
      str = str.replace(/function \(/g, 'function(');
      file.contents = new Buffer(str);
      next(null, file);
    }))
    .pipe(vfs.dest(function(file) {
      if (argv.name) file.basename = argv.name;
      return dest;
    }))
    .on('error', cb)
    .on('end', function() {
      console.log('fixed <%s>', path.relative(process.cwd(), src));
    });
});

composer.build(function() {
  if (err) throw err;
});
