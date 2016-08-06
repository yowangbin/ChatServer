var React = require('react');
var Header = require('./Panel/Header.react');
var SearchBar = require('./Panel/SearchBar.react');
var Tab = require('./Panel/Tab.react');
var ChatList = require('./Panel/ChatList.react');
var BoxHeader = require('./ChatBox/Header.react');
var BoxBody = require('./ChatBox/Body.react');
var BoxFooter = require('./ChatBox/Footer.react');
var style = {
    "height": "100%"
};

var ChatApp = React.createClass({
    render: function() {
        return (
            <div className="main_inner">
                <div className="panel">
                    <Header/>
                    <SearchBar/>
                    <Tab/>
                    <div id="navView"></div>
                    <ChatList/>
                </div>
                <div style={style}>
                    <div id="chatArea" className="box chat">
                        <BoxHeader/>
                        <BoxBody/>
                        <BoxFooter/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ChatApp;
