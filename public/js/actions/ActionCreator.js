var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var Socket = require('../utils/Socket');
var ActionTypes = ChatConstants.ActionTypes;
var activeUser={};
Socket.on('login', function (data) {
    activeUser.id = data.socketId;
});
Socket.on('user joined', function (data) {
    ActionCreator.getActiveUsersList(data);
});
Socket.on('user left', function (data) {
    ActionCreator.getActiveUsersList(data);
});
Socket.on('new message', function (data) {
    ActionCreator.sendMessage(data);
});
Socket.on('get message', function (data) {
    ActionCreator.sendMessage(data);
})
Socket.on('typing', function (data) {
    ActionCreator.typing(data);
});
Socket.on('stop typing', function (data) {
    ActionCreator.typing(data);
});
var ActionCreator = {
    sendMessage: function (data) {
        ChatAppDispatcher.dispatch({
            type: ActionTypes.GETALLCHAT,
            list: data.list
        });
    },
    login: function (username) {
        activeUser.name=username;
        ChatAppDispatcher.dispatch({
            type: ActionTypes.LOGIN,
            activeUser: activeUser,
        });
    },
    getActiveUsersList: function (data) {
        ChatAppDispatcher.dispatch({
            type: ActionTypes.GETACTIVEUSERSLIST,
            list: data.userList,
            username: data.username
        });
    },
    typing: function (data) {
        ChatAppDispatcher.dispatch({
            type: ActionTypes.TYPING,
            username: data.username,
            typing: data.typing
        })
    }

};

module.exports = ActionCreator;    