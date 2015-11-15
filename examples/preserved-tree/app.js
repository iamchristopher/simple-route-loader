'use strict';

var app = module.exports = require('express')();

require('../')(app, {
    dir: __dirname,
    preserveTree: true
});
