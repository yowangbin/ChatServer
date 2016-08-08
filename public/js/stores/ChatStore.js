var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = ChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var USERNAME = null;
var MESSAGE = null;
var Store = assign({}, EventEmitter.prototype, {

  init: function(rawMessages) {

  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCurrentUsername: function () {
      console.log('getCurrentUsername');
      return USERNAME;
  },

  createNewMessage:function(){
      return MESSAGE;
  }
});

Store.dispatchToken = ChatAppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.LOGINSUCCESS:
      console.log('emit LOGINSUCCESS');
      USERNAME = action.username; 
      Store.emitChange();
      break;
    
    case ActionTypes.CREATEMESSAGE:
      console.log('create menssage');
      MESSAGE = action.message;
      Store.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = Store;
