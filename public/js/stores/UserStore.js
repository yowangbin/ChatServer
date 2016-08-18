var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = ChatConstants.ActionTypes;
// 全局变量
var CHANGE_EVENT = 'change'; //事件
var ACTIVEUSER = null;       //当前登录用户
var UserStore = assign({}, EventEmitter.prototype, {

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
    return ACTIVEUSER;
  }
});

UserStore.dispatchToken = ChatAppDispatcher.register(function (action) {

  switch (action.type) {
    case ActionTypes.LOGIN:
      ACTIVEUSER = action.activeUser;
      UserStore.emitChange();
      break;
    default:
    // do nothing
  }

});

module.exports = UserStore;
