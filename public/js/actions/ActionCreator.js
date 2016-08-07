var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');

var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

    login: function (username) {
        console.log(username)
        ChatAppDispatcher.dispatch({
            type: ActionTypes.LOGINSUCCESS,
            username: username
        });
  }

};
