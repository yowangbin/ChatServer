var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = ChatConstants.ActionTypes;
// 全局变量
var CHANGE_EVENT = 'change'; //事件
var CHATLIST = [];             //聊天列表
var ChatsStore = assign({}, EventEmitter.prototype, {

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
  getAllChat: function () {
    return { list: CHATLIST };
  }

});

ChatsStore.dispatchToken = ChatAppDispatcher.register(function (action) {

  switch (action.type) {

    case ActionTypes.GETALLCHAT:
      CHATLIST = action.list;
      ChatsStore.emitChange();

    default:
    // do nothing
  }
});

module.exports = ChatsStore;
