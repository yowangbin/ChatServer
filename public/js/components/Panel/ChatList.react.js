var React = require('react');
var Store = require('../../stores/ChatStore');

var style = {
    'visibility': 'visible',
    'width': 'auto'
};
var ChatList = React.createClass({
    getInitialState() {
        return {
            list:[]
        };
    },
    
    componentWillMount() {
    Store.removeChangeListener(this._onChange);
    },
    componentDidMount() {
        Store.addChangeListener(this._onChange);
    },
    render(){
        var ListItems = this.state.list.map(function(item) {
        return (
        <ChatItem
          key={item.id}
          name={item.name}
        />
      );
    });
        return (
            <div className="nav_view" style={style}>
            {ListItems}
            </div>
        );
    },
    _onChange(){
        this.setState(Store.getUserList());
    }
});

var ChatItem=React.createClass({
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div>
                    <div className="top-placeholder" style={{height: '0px'}}></div>
                <div>
                <div className="chat_item slide-left">
                    <div className="ext">
                        <p className="attr">17:18</p>
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
                        <span>[3条]</span>
                        <span>10自动化-石璐:海洋依旧那么蠢萌</span>
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
