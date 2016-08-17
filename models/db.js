/*!
 * WeChat - db.js
 * Copyright(c) 2016 wangbin <yowangbin@gmail.com>
 * MIT Licensed
 */

'use strict';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoConfig = require('../config');
var fullMongoUrl = mongoConfig.serverUrl + mongoConfig.database;
var exports = module.exports = {};

MongoClient.connect(fullMongoUrl)
  .then((db) => {
    console.log('connect to database successfully');
    var usersCollection = db.collection('users');
    var chatsCollection = db.collection('chats');
    exports.addUser = (info) => {
      console.log('db add user');
      usersCollection.insertOne({ "name": info.name, "socketId": info.id });
      return usersCollection.find().toArray();
    }
    exports.deleteUser = (socketId) => {
      console.log('db delete user');
      console.log(socketId);
      usersCollection.deleteOne({ socketId: socketId });
      return usersCollection.find().toArray();
    }
    exports.addOneChat = ((info) => {
      chatsCollection.insertOne({ 'message': info.message, "name": info.name, "socketId": info.id });
      return chatsCollection.find().toArray();
    })
    exports.getAllChats = (() => {
      return chatsCollection.find().toArray();
    })
  });


















// 'use strict';
// var MongoClient = require('mongodb').MongoClient,
//     ObjectID = require('mongodb').ObjectID,
//     settings = require('../conf.js');
// var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
// var exports = module.exports = {};
// console.log(fullMongoUrl)
// MongoClient.connect(fullMongoUrl)
//     .then((db) => {
//         console.log('成功连接数据库...');
//         var todosCollection = db.collection('todos');
//         // 获取所有todos    
//         exports.getAll = () => {
//             console.log('getAll');
//             return todosCollection.find().toArray();
//         };
//         // 获取未完成todos
//         exports.getOpen = () => {
//             console.log('getOpen');
//             return todosCollection.find({ "status": '0' }).toArray();
//         };
//         // 获取已完成todos
//         exports.getCompleted = () => {
//             console.log('getCompleted');
//             return todosCollection.find({ "status": '1' }).toArray();
//         };
//         // 通过ID获取指定todo
//         exports.getById = (id) => {
//             console.log(id);
//             return todosCollection.find({ _id: new ObjectID(id) }).toArray();
//         };

//         // 增加todo
//         exports.create = (taskTitle) => {
//             console.log('create');
//             todosCollection.insertOne({ "taskTitle": taskTitle, "status": '0', "finishTime": new Date() });
//             return todosCollection.find().toArray();
//         };
//         // 删除todo
//         exports.delete = (id) => {
//             console.log('delete');
//             return todosCollection.deleteOne({ _id: new ObjectID(id) });
//         };
//         // 更新todo
//         exports.update = (id, obj) => {
//             console.log('update');
//             console.log(obj);
//             todosCollection.update({ _id: new ObjectID(id) }, obj, false, false);
//             return todosCollection.find().toArray();
//         };
//         // 增加备注
//         exports.addNode = () => {
//             console.log('addNode');
//         };
//     })
