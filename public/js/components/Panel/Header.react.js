var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <div className="avatar">
                    <img className="img" src=""/>
                </div>
                <div className="info">
                    <h3 className="nickname">
                        <span className="display_name ng-binding">Aha！！</span>
                        <a className="opt" href="javascript:;"><i className="web_wechat_add"></i></a>
                    </h3>
                </div>
            </div>
        )
    }
})

module.exports = Header;
