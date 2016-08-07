var React = require('react');
var Header = require('./Panel/Header.react');
var SearchBar = require('./Panel/SearchBar.react');
var Tab = require('./Panel/Tab.react');
var ChatList = require('./Panel/ChatList.react');
var BoxHeader = require('./ChatBox/Header.react');
var BoxBody = require('./ChatBox/Body.react');
var BoxFooter = require('./ChatBox/Footer.react');

var Logo = require("./Login/Logo.react");
var LoginBox = require("./Login/LoginBox.react");
var Copyright = require("./Login/Copyright.react");

var Store = require('../stores/ChatStore');

var style = {
    "height": "100%"
};
function getUsernameFromStores() {
    return {
        username: Store.getCurrentUsername(),
    };
}
var Main = React.createClass({
    componentDidMount() {
        Store.addChangeListener(this._onChange);
    },
    
    componentWillMount() {
        Store.removeChangeListener(this._onChange);
    },
    
    render() {
        console.log(this.state)
        var username = this.state ===null?'':this.state.username;
        return (
            <div className="main_inner">
            <Login/>
                <div className="panel">
                    <Header username={username}/>
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
    },
    _onChange() {
        this.setState(getUsernameFromStores());
    }
});


var Login = React.createClass({
    render: function() {
        return (
            <div>
                <Logo/>
                <LoginBox/>
                <Copyright/>
            </div>
        )
    }
})

module.exports = {
    Login: Login,
    Main: Main
};
