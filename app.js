/*!
 * WeChat - app.js
 * Copyright(c) 2016 wangbin <yowangbin@gmail.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var middlewares = require('koa-middlewares');
var routes = require('./routes');
var config = require('./config');
var path = require('path');
var http = require('http');
var koa = require('koa');
var io = require('socket.io');
var app = koa();
var router = middlewares.router();
/**
 * ignore favicon
 */
app.use(middlewares.favicon());

/**
 * response time header
 */
app.use(middlewares.rt());

/**
 * static file server
 */
app.use(middlewares.staticCache(path.join(__dirname, 'public'), {
    buffer: !config.debug,
    maxAge: config.debug ? 0 : 60 * 60 * 24 * 7
}));
app.use(middlewares.bodyParser());

if (config.debug && process.env.NODE_ENV !== 'test') {
    app.use(middlewares.logger());
}

/**
 * router
 */

routes(router)

app.use(router.routes());
app.use(router.allowedMethods());

app = module.exports = http.createServer(app.callback());

/**
 * io
 */
io(app).on('connection', function (socket) {
    console.log('new user')
    socket.on('new message', function (data) {
        console.log(data)
        socket.emit('new message', data);
    });
})
if (!module.parent) {
    app.listen(config.port);
    console.log('$ open http://127.0.0.1:' + config.port);
}
