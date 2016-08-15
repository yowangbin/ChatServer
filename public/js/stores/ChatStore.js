var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = ChatConstants.ActionTypes;
// 全局变量
var CHANGE_EVENT = 'change'; //事件
var ACTIVEUSER = null;       //当前登录用户
var TYPINGNAME = null;         //正在输入用户
var ISTYPING = false;
var MESSAGE = null;          //
var USERNAME = null;           //用户名
var USERLIST = [];             //用户列表
var CHATLIST = [];             //聊天列表
var Store = assign({}, EventEmitter.prototype, {

  init: function (rawMessages) {

  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  getUserInfo: function () {
    return { name: ACTIVEUSER };
  },

  /**
   * @param {function} callback
   */
  getUserList: function () {
    return { list: USERLIST, total: USERLIST.length };
  },

  /**
   * @param {function} callback
   */
  getAllChat: function () {
    return { list: CHATLIST };
  },

  /**
  * @param {function} callback
  */
  getTypingUser: function () {
    if (ISTYPING)
      return { status: TYPINGNAME + "正在输入" };
    else
      return { status: '' }

  }

});

Store.dispatchToken = ChatAppDispatcher.register(function (action) {

  switch (action.type) {
    case ActionTypes.LOGIN:
      ACTIVEUSER = action.activeUser;
      Store.emitChange();
      break;

    case ActionTypes.GETACTIVEUSERSLIST:
      USERNAME = action.username;
      USERLIST = action.list;
      Store.emitChange();
      break;

    case ActionTypes.GETALLCHAT:
      CHATLIST = action.list;
      Store.emitChange();


    case ActionTypes.TYPING:
      TYPINGNAME = action.username;
      ISTYPING = action.typing;
      Store.emitChange();
    default:
    // do nothing
  }

});

module.exports = Store;
