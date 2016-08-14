var React = require('react');
var Pubsub = require('pubsub-js');

var Header = require('./Panel/Header.react');
var SearchBar = require('./Panel/SearchBar.react');
var Tab = require('./Panel/Tab.react');
var BoxHeader = require('./ChatBox/Header.react');
var BoxBody = require('./ChatBox/Body.react');
var BoxFooter = require('./ChatBox/Footer.react');
var Menu = require('./Panel/Menu.react');
var Profile = require('./Panel/Profile.react');

var Logo = require("./Login/Logo.react");
var LoginBox = require("./Login/LoginBox.react");
var Copyright = require("./Login/Copyright.react");

var style = {
    "height": "100%"
};

var Main = React.createClass({
    getInitialState() {
        return {
            showMenu: false,
            showProfile: false
        }
    },
    componentDidMount: function () {
        this.showMenuPubsubToken = Pubsub.subscribe('show menu', function (topic, key) {
            this.setState({
                showMenu: key
            });
        }.bind(this));
        this.showProfilePubsubToken = Pubsub.subscribe('show profile', function (topic, key) {
            this.setState({
                showProfile: key
            });
        }.bind(this));
    },
    componentWillUnmount: function () {
        Pubsub.unsubscribe(this.showMenuPubsubToken);
        Pubsub.unsubscribe(this.showProfilePubsubToken)
    },
    render() {
        var MenuTag, ProfileTag;
        if (this.state.showMenu) MenuTag = <Menu/>
        if (this.state.showProfile) ProfileTag = <Profile/>
        return (
            <div className="main_inner">
                <Login/>
                <div className="panel">
                    <Header/>
                    <Tab/>
                    {MenuTag}
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


var Login = React.createClass({
    render: function () {
        return (
            <div>
                <LoginBox/>
                <Copyright/>
            </div>
        );
    }
});

module.exports = {
    Login: Login,
    Main: Main
};
