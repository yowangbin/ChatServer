var React = require('react');
var Header = require('./Panel/Header.react');
var SearchBar = require('./Panel/SearchBar.react');
var Tab = require('./Panel/Tab.react');
var BoxHeader = require('./ChatBox/Header.react');
var BoxBody = require('./ChatBox/Body.react');
var BoxFooter = require('./ChatBox/Footer.react');

var Logo = require("./Login/Logo.react");
var LoginBox = require("./Login/LoginBox.react");
var Copyright = require("./Login/Copyright.react");
var Pubsub = require('pubsub-js');
var Menu=require('./Login/Menu.react');
var style = {
    "height": "100%"
};

var Main = React.createClass({
    getInitialState(){
        return {
            showMenu:false
        }
    },
    componentDidMount: function () {
        this.pubsub_token = Pubsub.subscribe('show menu', function (topic, key) {
            this.setState({
                showMenu:key 
            });
        }.bind(this));
    },
    componentWillUnmount: function () {
        PubSub.unsubscribe(this.pubsub_token);
    },
    render() {
        var Panel;
        if(this.state.showMenu)
            Panel=<Menu/>
        return (
            <div className="main_inner">
                <Login/>
                <div className="panel">
                    <Header/>
                    <Tab/>
                    {Panel}
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
                <Logo/>
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
