'use strict';

var router = module.exports = require('express').Router();

/*
 * This route will be loaded at /api/post
 */
router.route('/')
    .get(function (req, res) {
        res.send('Posts!');
    });

/*
 * This route will be loaded at /api/post/new
 */
router.route('/new')
    .get(function (req, res) {
        res.send('New post!');
    });
