var React = require('react');

var Tab = React.createClass({
    render: function() {
        return (
            <div className="tab">
                <div className="tab_item ">
                    <a className="chat" title="聊天 " href="# ">
                        <i className="web_wechat_tab_chat web_wechat_tab_chat_hl"></i>
                    </a>
                </div>
                <div className="tab_item">
                    <a className="chat " title="阅读 " href="# ">
                        <i className="web_wechat_tab_public "></i>
                    </a>
                </div>
                <div className="tab_item">
                    <a className="chat " title="通讯录 " href="# ">
                        <i className="web_wechat_tab_friends "></i>
                    </a>
                </div>
             </div>
        )
    }
})

module.exports = Tab;
