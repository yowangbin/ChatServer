var React = require('react');
var Store = require('../../stores/ChatStore');

var style = {
    "marginBottom": "0px",
    "marginRight": "0px",
    "height": "469px"
};
var MessageYou = React.createClass({
	render() {
		return (
			<div>
				<div className="clearfix">
					<div style={{ overflow: 'hidden' }}>
						<div className="message you">
							<img className="avatar" src="" title={this.props.name}/>
							<div className="content">
								<div className="bubble js_message_bubble bubble_default left">
									<div className="bubble_cont">
										<div className="plain">
											<pre className="js_message_plain">{this.props.content}</pre>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
var MessageMe = React.createClass({
	getDefaultProps() {
		return {
			message: ''
		};
	},
	render() {
		return (
			<div>
				<div className="clearfix">
					<div style={{ overflow: 'hidden' }}>
						<div className="message me">
							<img className="avatar" src="" title="Aha！！"/>
							<div className="content">
								<div className="bubble js_message_bubble bubble_primary right">
									<div className="bubble_cont">
										<div className="plain">
											<pre className="js_message_plain"></pre>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

var MessageEmpty = React.createClass({
	render() {
		return (
			<div className="message_empty">
				<i className="web_wechat_nomes_icon"></i>
				<p>暂时没有新消息</p>
                <p>未选择聊天</p>
            </div>
		);
	}
});
var BoxBody = React.createClass({

    getInitialState() {
        return Store.getAllChat();
    },

    componentWillMount() {
        Store.removeChangeListener(this._onChange);
    },

    componentDidMount() {

        Store.addChangeListener(this._onChange);
    },
	componentDidUpdate(prevProps, prevState) {
		console.log('hi')
		this._scrollToBottom();
	},

    render() {
		var ChatContent = this.state.list.map(function (item, index) {
			return <MessageYou key={item.id} name={item.name} content={item.content}/>
		});
        return (
            <div className="scroll-wrapper box_bd chat_bd scrollbar-dynamic" style={{ 'position': 'absolute' }}>
				<div className="box_bd chat_bd scrollbar-dynamic scroll-content" ref='scrollContent' style={style}>
                   	<div>
						<div className="top-placeholder" style={{ height: 0 }}></div>
                       	<div className="bottom-placeholder" style={{ height: 0 }}></div>
					</div>
					{ChatContent}
               	</div>
			</div>
        );
    },
	_onChange() {
		if (this.isMounted())
            this.setState(Store.getAllChat());
	},
	_scrollToBottom: function () {
		this.refs.scrollContent.scrollTop=this.refs.scrollContent.scrollHeight;
    },
});

module.exports = BoxBody;