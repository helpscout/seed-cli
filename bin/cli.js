'use strict';

// Seed CLI :: CLI

var meow = require('meow');
var pkg = require('../package');

var cli = meow('\n  Usage:\n    seed <command>\n\n  Commands:\n    n, new          Creates a new Seed pack\n    g, generate     Creates a new .scss module (component/object/scope/test/utility)\n\n  Options:\n    -c, --config    Custom sass-lint config (.yml)\n    -i, --ignore    Ignore files for linting/testing\n    -l, --lint      Initialize .scss lint (powered by sass-lint)\n    -t, --test      Initialize tests (powered by mocha + sass-true)\n\n  ' + pkg.name + ' v' + pkg.version + '\n  Website: ' + pkg.homepage + '\n', {
  alias: {
    c: 'config',
    i: 'ignore',
    n: 'new',
    l: 'lint',
    t: 'test'
  }
});

module.exports = cli;
