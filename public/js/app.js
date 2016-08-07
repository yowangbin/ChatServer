var React = require('react');
var ReactDOM = require('react-dom')
var ChatApp = require("./components/ChatApp.react");

ReactDOM.render(
    <ChatApp.Login/>,
    document.getElementById('login')
);
ReactDOM.render(
    <ChatApp.Main/>,
    document.getElementById('main')
);
