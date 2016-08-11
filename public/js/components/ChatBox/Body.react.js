var React = require('react');
var style = {
    "marginBottom": "0px",
    "marginRight": "0px",
    "height": "469px"
};
var MessageYou=React.createClass({
	render() {
		return (
			<div>
				<div className="clearfix">
			 		<div style={{overflow:'hidden'}}>
						<div className="message you">
        					<img className="avatar" src="" title="帖海阳"/>
        						<div className="content">
									<div className="bubble js_message_bubble bubble_default left">
               							<div className="bubble_cont">
                    						<div className="plain">
                        						<pre className="js_message_plain">更别说英语了</pre>
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
var MessageMe=React.createClass({
	getDefaultProps(){
		return {
			message:''
		};
	},
	render() {
		return (
			<div>
				<div className="clearfix">
					<div style={{overflow: 'hidden'}}>
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

var MessageEmpty=React.createClass({
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
    render() {
        return (
            <div className="scroll-wrapper box_bd chat_bd scrollbar-dynamic" style={{ 'position': 'absolute' }}>
				<div className="box_bd chat_bd scrollbar-dynamic scroll-content" style={style}>
                   	<div>
						<div className="top-placeholder" style={{ height: 0 }}></div>
                       	<div className="bottom-placeholder" style={{ height: 0 }}></div>
					</div>
					<MessageEmpty/>
               	</div>
			</div>
        );
    }
});

function getMessageListItem(message) {
	console.log(message);
    return (
        <MessageMe message={message} key={new Date()}/>
    );
}
module.exports = BoxBody;