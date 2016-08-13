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
var db = require('./models/db');
var app = koa();
var router = middlewares.router();
var randomID = require("random-id");

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

routes(router);

app.use(router.routes());
app.use(router.allowedMethods());

app = module.exports = http.createServer(app.callback());

/**
 * io
 */
var USERNUMBER = 0;
var USERLIST = [];
var CHATLIST = [];
io(app).on('connection', function (socket) {
  var addedUser = false;

  socket.on('new message', function (data) {
    var stamp=new Date(socket.handshake.time).getTime();
    CHATLIST.push({id:randomID(),name:socket.username,content:data,stamp:stamp});
    socket.emit('new message', {
      username: socket.username,
      list: CHATLIST
    });
    socket.broadcast.emit('new message', {
      username: socket.username,
      list: CHATLIST
    });
  });


  socket.on('add user', function (username) {
    if (addedUser) return;
    socket.username = username;
    USERLIST.push({ id: socket.id, name: username, loginTime: new Date(socket.handshake.time).getTime() });
    addedUser = true;
    socket.emit('user joined', {
      username: username,
      userList: USERLIST
    });
    socket.emit('get message', {
      username: username,
      list: CHATLIST
    });
    socket.broadcast.emit('user joined', {
      username: username,
      userList: USERLIST
    });

  });

  socket.on('disconnect', function () {
    if (addedUser) {
      for (var i = 0, l = USERLIST.length; i < l; i++) {
        if (USERLIST[i].name === socket.username)
          USERLIST.splice(i, 1);
      }
      socket.broadcast.emit('user left', {
        username: socket.username,
        userList: USERLIST
      });
    }
  });

  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });
});
if (!module.parent) {
  app.listen(config.port);
  console.log('$ open http://127.0.0.1:' + config.port);
}
