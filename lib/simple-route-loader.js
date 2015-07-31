'use strict';

var path = require('path'),
    fs   = require('fs'),
    execFile = require('child_process').execFile;

module.exports = function (app, options) {
    var options = options || {},
        routes_dir = options.folder || [];

    if (typeof routes_dir == 'string') {
        routes_dir = [ routes_dir ];
    }

    if (!options.folder) {
        routes_dir.push(process.cwd());
    }

    execFile('find', routes_dir, function (err, stdout, stderr) {
        var files = stdout.trim().split('\n');

        files.forEach(function (file) {
            var stat = fs.statSync(file);

            if (stat.isDirectory()) {
                return;
            }

            app.use(require(file));
        });
    });
}
