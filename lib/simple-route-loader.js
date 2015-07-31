'use strict';

var path = require('path'),
    fs   = require('fs'),
    execFile = require('child_process').execFile;

module.exports = function (app, options) {
    var options = options || {},
        allowed_files = setDefaultArray(options.file, 'router.js'),
        routes_dir = setDefaultArray(options.folder, process.cwd());

    execFile('find', routes_dir, function (err, stdout, stderr) {
        var files = stdout.trim().split('\n');

        files.forEach(function (file) {
            var stat = fs.statSync(file),
                file_dir = path.dirname(file),
                file_name = path.basename(file);

            if (stat.isDirectory()) {
                return;
            }

            if (allowed_files.indexOf(file_name) < 0) {
                return;
            }

            routes_dir.forEach(function (dir) {
                if (file_dir.indexOf(dir) > -1) {
                    file_dir = file_dir.replace(dir, '');

                    return;
                }
            });

            app.use(file_dir, require(file));
        });
    });
}

function setDefaultArray (value, default_value) {
    var value = value || [];

    if (typeof value == 'string') {
        value = [ value ];
    }

    if (!value.length) {
        value.push(default_value);
    }

    return value;
}
