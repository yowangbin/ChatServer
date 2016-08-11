var React = require('react');
var ActionCreator = require('../../actions/ActionCreator');
var ChatConstants = require('../../constants/ChatConstants');
var BoxFooter = React.createClass({
	render() {
		return (
            <div className="box_ft">
                <div className="toolbar" id="tool_bar">
                   	<a className="web_wechat_face" href="javascript:;" title="表情"></a>
                   	<a className="web_wechat_screencut" href="javascript:;" title="截屏"></a>
                </div>
                <div className="content">
					<pre id="editArea" className="flex edit_area" contentEditable="true" onKeyDown={this._onKeyDown}></pre>
					<span className="caret_pos_helper" id="caretPosHelper"></span>
				</div>
				<div className="action">
					<span className="desc">按下Cmd+Enter换行</span>
					<a className="btn btn_send" href="javascript:;">发送</a>
				</div>
			</div>
		);
	},
	_onKeyDown(e) {
		if (e.which===ChatConstants.ENTER_KEY_CODE){
			console.log('send message:' + e.target.textContent);
			ActionCreator.createMessage(e.target.textContent);
		}
	}
});

module.exports = BoxFooter;
