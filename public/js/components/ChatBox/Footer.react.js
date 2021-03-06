var React = require('react');
var $ = require('jquery');
var Pubsub = require('pubsub-js');
var ActionCreator = require('../../actions/ActionCreator');
var UserStore=require('../../stores/UserStore');
var ChatConstants = require('../../constants/ChatConstants');
var Socket = require("../../utils/socket");

var BoxFooter = React.createClass({
	componentDidMount() {
		Pubsub.subscribe('login success',this.clearAndFocus);
	},
	clearAndFocus: function () {
        var elem = this.refs.element;
		window.setTimeout(function () {
			elem.focus();
		}, 0);
    },
	getInitialState: function () {
		return {
			content: ''
		}
	},
	render() {
		return (
            <div className="box_ft">
				{
					/**
					<a className="web_wechat_face" href="javascript:;" title="表情"></a>
					<a className="web_wechat_screencut" href="javascript:;" title="截屏"></a>
					 */
				}
                <div className="toolbar" id="tool_bar">

                </div>
                <div className="content">
					<pre id="editArea"
						ref='element'
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
					<a className="btn btn_send" href="javascript:;" onClick={this._onClick}>发送</a>
				</div>
			</div>
		);
	},

	_onKeyDown(e) {
		Socket.emit('typing');
		console.log(UserStore.getUserInfo())
		if (e.target.textContent != '' && e.which === ChatConstants.ENTER_KEY_CODE) {
			Socket.emit('new message', e.target.textContent,UserStore.getUserInfo().id);
		}
	},
	_onClick(e) {
		if (this.state.content != '') {
			Socket.emit('new message', this.state.content);
			Socket.emit('stop typing');
			this.setState({
				content: ''
			})
		}
	},

	_emitChange(e) {
		this.setState({
			content: e.target.textContent
		})
	},

	_onKeyUp(e) {
		if (this.state.content === '')
			Socket.emit('stop typing');
		if (e.which === ChatConstants.ENTER_KEY_CODE) {
			Socket.emit('stop typing');
			this.setState({
				content: ''
			})
		}
	}
});

module.exports = BoxFooter;
