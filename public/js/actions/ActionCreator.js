var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var Socket = require('../utils/Socket');
var ActionTypes = ChatConstants.ActionTypes;
// window.Socket = Socket;
// // Whenever the server emits 'login', log the login message
Socket.on('login', function (data) {
    var message = "Welcome to Socket.IO Chat – ";
    log(message, {
        prepend: true
    });
});

// // Whenever the server emits 'new message', update the chat body

// // Whenever the server emits 'user joined', log it in the chat body


// // Whenever the server emits 'user left', log it in the chat body
Socket.on('user left', function (data) {
    log(data.username + ' left');
});

// // Whenever the server emits 'typing', show the typing message
Socket.on('typing', function (data) {

});

// // Whenever the server emits 'stop typing', kill the typing message
Socket.on('stop typing', function (data) {

});
module.exports = {
    login: function (username) {
        Socket.emit('add user',username);
        Socket.on('user joined', function (data) {
            console.log(data.username + ' joined');
            ChatAppDispatcher.dispatch({
                type: ActionTypes.LOGIN,
                name: data.username,
                list: data.userList
            });
        });
    },
    createMessage: function (message) {
        Socket.emit('new message', message);
        Socket.on('new message', function (data) {
            ChatAppDispatcher.dispatch({
                type: ActionTypes.CREATEMESSAGE,
                message: data
            });
        });
    }
};