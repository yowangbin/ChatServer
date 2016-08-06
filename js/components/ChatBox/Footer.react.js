var React = require('react');

var BoxFooter = React.createClass({
    render: function() {
        return (
            <div className="box_ft">
                <div className="toolbar" id="tool_bar">
                   	<a className="web_wechat_face" href="javascript:;" title="表情"></a>
                   	<a className="web_wechat_screencut" href="javascript:;" title="截屏"></a>
                </div>
                <div className="content">
             		<pre id="editArea" className="flex edit_area" contentEditable="true"></pre>
                  	<span className="caret_pos_helper" id="caretPosHelper"></span>
             	</div>
            	<div className="action">
                	<span className="desc">按下Cmd+Enter换行</span>
                  	<a className="btn btn_send" href="javascript:;">发送</a>
              	</div>
         	</div>
        )
    }
})

module.exports = BoxFooter;
