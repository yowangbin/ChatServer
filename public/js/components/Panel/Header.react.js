var React = require('react');
var Store = require('../../stores/ChatStore');
var Pubsub = require('pubsub-js');

var Header = React.createClass({
    getInitialState() {
        this.showMenu = false;
        this.showProfile = false;
        return {
            name: ''
        };
    },
    componentWillMount() {
        Store.removeChangeListener(this._onChange);
    },
    componentDidMount() {
        Store.addChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div className="header">
                <div className="avatar">
                    <img className="img" onClick={this._showProfile} src="../../images/avatars/1.jpg"/>
                </div>
                <div className="info">
                    <h3 className="nickname">
                        <span className="display_name ng-binding">{this.state.name}</span>
                       {/** <a className="opt" href="javascript:;"><i className="web_wechat_add" onClick={this._showMenu}></i></a> */} 
                    </h3>
                </div>
            </div>
        );
    },
    _showProfile() {
        this.showProfile = this.showProfile === false ? true : false;
        Pubsub.publish('show profile', this.showProfile);
    },
    _showMenu() {
        this.showMenu = this.showMenu === false ? true : false;
        Pubsub.publish('show menu', this.showMenu);
    },
    _onChange(data) {
        this.setState(Store.getUserInfo());
    }
});

module.exports = Header;
