var React = require('react');

var BoxHeader = React.createClass({
    render() {
        return (
            <div className="box_hd">
                <a className="ext web_wechat_addfriend" href="javascript:;" title="成员"></a>
                <a className="ext web_wechat_addfriend" href="javascript:;" title="Profile"></a>
                <div id="chatRoomMembersWrap">

                </div>
                <div className="title_wrap">
                   	<div className="title poi">
                        <a className="title_name"></a>
                        <i className="web_wechat_down_icon"></i>
                    </div>
               	</div>
           	</div>
        );
    }
});

module.exports = BoxHeader;
