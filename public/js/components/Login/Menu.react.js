var React = require('react');

var Menu = React.createClass({
    render() {
        return (
            <div id="mmpop_system_menu" className="mmpop system_menu" tabIndex="-1" style={{top: '60px', left: '85px'}}>
                <ul className="dropdown_menu">
                    <li>
                        <a tabIndex="-1" href="javascript:;" title="发起聊天">
                            <i className="menuicon_chat"></i>发起聊天
                        </a>
                    </li>
                    <li>
                        <a tabIndex="-1" href="javascript:;" title="关闭桌面通知">
                            <i className="menuicon_push_on"></i>关闭桌面通知
                        </a>
                    </li>
                    <li>
                        <a tabIndex="-1" href="javascript:;" title="关闭声音">
                            <i className="menuicon_volume_on"></i>关闭声音
                        </a>
                    </li>
                    <li>
                        <a tabIndex="-1" href="javascript:;" title="意见反馈">
                            <i className="menuicon_feedback"></i>意见反馈
                        </a>
                    </li>
                    <li className="last_child">
                        <a tabIndex="-1" href="javascript:;" title="退出">
                            <i className="menuicon_quit"></i>退出</a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports=Menu;