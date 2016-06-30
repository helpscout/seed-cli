'use strict';

var sass = require('node-sass');

sass.render({
  file: './scss/pack/_<%= packName %>.scss'
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    return console.log('Success!');
  }
});