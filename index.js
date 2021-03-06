#!/usr/bin/env node
'use strict';
var path = require('path');

global.appRoot = path.resolve(__dirname);
global.cli = require('./bin/cli.js');
global.command = global.cli.input[0];
global.path = __dirname;
global.templateDir = global.path + '/templates/';

var isBlank = require('is-blank');
var requireDir = require('require-dir', { log: false });

if (isBlank(global.command) && isBlank(global.cli.flags)) {
  console.log(global.cli.help);
  process.exit(1);
}
else {
  // Require all commands
  requireDir('./commands', { recurse: true });
}
