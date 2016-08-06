var React = require('react');
var style = {
    "margin-bottom": "0px",
    "margin-right": "0px",
    "height": "469px"
};

var BoxBody = React.createClass({
    render: function() {
        return (
            <div className="scroll-wrapper box_bd chat_bd scrollbar-dynamic" style={{'position': 'absolute'}}>
             	<div className="box_bd chat_bd scrollbar-dynamic scroll-content" style={style}>
                   	<div>
                      	<div className="top-placeholder" style={{height: 0}}></div>
                       	<div className="bottom-placeholder" style={{height: 0}}></div>
                  	</div>
                   	<div className="message_empty">
                      	<i className="web_wechat_nomes_icon"></i>
                      	<p className="ng-hide">暂时没有新消息</p>
                       	<p className="">未选择聊天</p>
                   	</div>
               	</div>
          	</div>
        )
    }
})

module.exports = BoxBody;
