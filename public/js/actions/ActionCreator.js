var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var Socket = require('../utils/Socket');
var ActionTypes = ChatConstants.ActionTypes;
// window.Socket = Socket;
// // Whenever the server emits 'login', log the login message
// socket.on('login', function(data) {
//     connected = true;
//     // Display the welcome message
//     var message = "Welcome to Socket.IO Chat – ";
//     log(message, {
//         prepend: true
//     });
//     addParticipantsMessage(data);
// });

// // Whenever the server emits 'new message', update the chat body

// // Whenever the server emits 'user joined', log it in the chat body
// socket.on('user joined', function(data) {
//     log(data.username + ' joined');
//     addParticipantsMessage(data);
// });

// // Whenever the server emits 'user left', log it in the chat body
// socket.on('user left', function(data) {
//     log(data.username + ' left');
//     addParticipantsMessage(data);
//     removeChatTyping(data);
// });

// // Whenever the server emits 'typing', show the typing message
// socket.on('typing', function(data) {
//     addChatTyping(data);
// });

// // Whenever the server emits 'stop typing', kill the typing message
// socket.on('stop typing', function(data) {
//     removeChatTyping(data);
// });
module.exports = {
    login: function (username) {
        ChatAppDispatcher.dispatch({
            type: ActionTypes.LOGINSUCCESS,
            username: username
        });
    },
    createMessage: function (message) {
        Socket.emit('new message', message);
        Socket.on('new message', function (data) {
            ChatAppDispatcher.dispatch({
                type: ActionTypes.NEWMESSAGE,
                message: data
            });
        });
    }
};