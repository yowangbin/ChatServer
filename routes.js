/*!
 * WeChat - config.js
 * Copyright(c) 2016 wangbin <yowangbin@gmail.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var home = require('./controllers/home');

module.exports = function routes(app) {
    app.get('/', home);
};
