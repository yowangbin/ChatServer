var React = require('react');
var ActionCreator = require('../../actions/ActionCreator');
var ChatConstants = require('../../constants/ChatConstants');
var Socket = require("../../utils/socket");

var BoxFooter = React.createClass({
	getInitialState: function () {
		return {
			content: ''
		}
	},
	render() {
		return (
            <div className="box_ft">
                <div className="toolbar" id="tool_bar">
                   	<a className="web_wechat_face" href="javascript:;" title="表情"></a>
                   	<a className="web_wechat_screencut" href="javascript:;" title="截屏"></a>
                </div>
                <div className="content">
					<pre id="editArea"
						dangerouslySetInnerHTML={{ __html: this.state.content }}
						className="flex edit_area"
						contentEditable="true"
						onKeyDown={this._onKeyDown}
						onInput={this._emitChange}
						onBlur={this._emitChange}
						onKeyUp={this._onKeyUp}
						></pre>
					<span className="caret_pos_helper" id="caretPosHelper"></span>
				</div>
				<div className="action">
					<span className="desc">按下Enter发送消息</span>
					<a className="btn btn_send" href="javascript:;">发送</a>
				</div>
			</div>
		);
	},

	_onKeyDown(e) {
		if (e.target.textContent != '' && e.which === ChatConstants.ENTER_KEY_CODE) {
			Socket.emit('new message', e.target.textContent);
		}
	},

	_emitChange(e) {
		this.setState({
			content: e.target.textContent
		})
	},

	_onKeyUp(e) {
		if (e.which === ChatConstants.ENTER_KEY_CODE)
			this.setState({
				content: ''
			})
	}

});

module.exports = BoxFooter;
