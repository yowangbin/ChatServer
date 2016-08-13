var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var Socket = require('../utils/Socket');
var ActionTypes = ChatConstants.ActionTypes;

Socket.on('login', function (data) {
 
});
Socket.on('user joined', function (data) {
    ActionCreator.getActiveUsersList(data);
});
Socket.on('user left', function (data) {
    console.log(data.username + ' left');
});
Socket.on('typing', function (data) {

});
Socket.on('stop typing', function (data) {

});
var ActionCreator = {
    login: function (username) {
        ChatAppDispatcher.dispatch({
            type: ActionTypes.LOGIN,
            activeUser: username,
        });
    },
    getActiveUsersList: function (data) {
        ChatAppDispatcher.dispatch({
            type: ActionTypes.GETACTIVEUSERSLIST,
            list: data.userList,
            newUser: data.name
        });
    }
};

module.exports=ActionCreator;