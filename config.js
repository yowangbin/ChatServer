/*!
 * WeChat - config.js
 * Copyright(c) 2016 wangbin <yowangbin@gmail.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var version = require('./package.json').version;
var path = require('path');

var config = {
    version: version,
    debug: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 7001
};

module.exports = config;
