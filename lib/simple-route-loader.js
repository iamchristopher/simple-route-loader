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
            var stat = fs.statSync(file),
                file_dir = path.dirname(file),
                file_name = path.basename(file);

            if (stat.isDirectory()) {
                return;
            }

            if (file_name != 'router.js') {
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
