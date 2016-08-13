var React = require('react');
var Store = require('../../stores/ChatStore');

var style = {
    'visibility': 'visible',
    'width': 'auto',
    overflowY: 'auto'
};
var ChatList = React.createClass({
    getInitialState() {
        return {
            list: []
        };
    },

    componentWillMount() {
        Store.removeChangeListener(this._onChange);
    },
    componentDidMount() {
        Store.addChangeListener(this._onChange);
    },

    render() {
        return (
            <div className="nav_view" style={{ visibility: 'visible', width: 'auto' }}>
                <div className="scroll-wrapper read_list scrollbar-dynamic" style={{ position: 'relative' }}>
                    <div className="read_list scrollbar-dynamic scroll-content" style={{ marginBottom: '0px', marginRight: '0px', height: '549px' }}>
                        <p className="ico_loading">私聊暂未开放...</p>
                    </div>
                </div>
            </div>
        );
    },
    // render() {
    //     var ListItems = this.state.list.map(function (item) {
    //         return (
    //             <ChatItem
    //                 key={item.id}
    //                 name={item.name}
    //                 time={new Date(item.loginTime).toTimeString().substr(0, 5) }
    //                 />
    //         );
    //     });
    //     return (
    //         <div className="nav_view" style={style}>
    //             {ListItems}
    //         </div>
    //     );
    // },
    _onChange() {
        this.setState(Store.getUserList());
    }
});

var ChatItem = React.createClass({
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <div>
                    <div className="top-placeholder" style={{ height: '0px' }}></div>
                    <p className="ico_loading">热门暂未开放...</p>
                    <div>
                        <div className="chat_item slide-left">
                            <div className="ext">
                                <p className="attr">{this.props.time}</p>
                                <p className="attr">
                                    <i className="web_wechat_no-remind"></i>
                                </p>
                            </div>
                            <div className="avatar">
                                <img className="img" src="" alt=""/>
                                <i className="icon web_wechat_reddot"></i>
                            </div>
                            <div className="info">
                                <h3 className="nickname">
                                    <span className="nickname_text">{this.props.name}</span>
                                </h3>
                                <p className="msg">
                                    <span></span>
                                    <span>{this.props.time}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = ChatList;
