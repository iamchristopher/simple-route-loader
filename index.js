'use strict';

// Dependencies
var path     = require('path'),
    fs       = require('fs'),
    extend   = require('extend'),
    execFile = require('child_process').execFile;

// Privates
var _options ={
    files: [ 'router.js' ],
    folders: [ process.cwd() ],
    preserveTree: true
};

module.exports = function (app, options) {
    extend(_options, options);
    _options.app = app;

    execFile('find', _options.folders, execHandler);
};

function execHandler (err, stdout, stderr) {
    stdout
        .trim()
        .split('\n')
        .filter(verifyFile)
        .map(formatFilePath)
        .forEach(mountPath);
}

function mountPath (r) {
    _options.app.use(r.dir, require(r.file));
}

function formatFilePath (p) {
    var i         = { dir: '/', file: p },
        directory = path.dirname(p);

    if (_options.preserveTree) {
        _options.folders.forEach(function (dir) {
            if (directory.indexOf(dir) >= 0) {
                i.dir = directory.replace(dir, '');
            }
        });
    }

    return i;
}

function verifyFile (f) {
    var stat      = fs.statSync(f),
        name      = path.basename(f);

    if (stat.isDirectory()) return false;
    if (_options.files.indexOf(name) === -1) return false;

    return true;
}
