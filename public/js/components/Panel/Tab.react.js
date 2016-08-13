var React = require('react');
var ChatList = require('./ChatList.react');
var FriendsList = require('./FriendsList.react');

var Tab = React.createClass({
    render() {
        return (
            <div className="tab_item" onClick={this.props.onClick}>
                <a className="chat " title={this.props.title} href="# ">
                    <i className={this.props.className}></i>
                </a>
            </div>
        );
    }
});
var TabsControl = React.createClass({
    getInitialState() {
        return {
            tabs: [
                { tabName: "用户列表", id: 1 },
                { tabName: "私信", id: 2 },
                { tabName: "阅读", id: 3 }
            ],
            currentIndex: 1
        };
    },
    render() {
        var self = this;
        var className = '';
        var tabList = this.state.tabs.map(function (item, index) {
            if (item.id === 1)
                className = item.id === self.state.currentIndex ? 'web_wechat_tab_friends web_wechat_tab_friends_hl' : 'web_wechat_tab_friends';
            if (item.id === 2)
                className = item.id === self.state.currentIndex ? 'web_wechat_tab_chat web_wechat_tab_chat_hl' : 'web_wechat_tab_chat';
            if (item.id === 3)
                className = item.id === self.state.currentIndex ? 'web_wechat_tab_public web_wechat_tab_public_hl' : 'web_wechat_tab_public';
            return (<Tab key={index} title={item.tabName} onClick={self._onClick.bind(self, item.id) } className={className}/>);
        });
        return (
            <div>
                <div className="tab">
                    {tabList}
                </div>
                <div id="navView"></div>
                <FriendsList/>
            </div>
        );
    },
    _onClick(id) {
        this.setState({
            currentIndex: id
        });
    }
});

module.exports = TabsControl;
