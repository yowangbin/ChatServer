var React = require('react');
var Store = require('../../stores/ChatStore');

var Header = React.createClass({
    getInitialState() {
        return {
            name:''
        };
    },
    componentWillMount() {
        Store.removeChangeListener(this._onChange);
    },
    componentDidMount() {
        Store.addChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div className="header">
                <div className="avatar">
                    <img className="img" src=""/>
                </div>
                <div className="info">
                    <h3 className="nickname">
                        <span className="display_name ng-binding">{this.state.name}</span>
                        <a className="opt" href="javascript:;"><i className="web_wechat_add"></i></a>
                    </h3>
                </div>
            </div>
        );
    },
    _onChange(data) {
        this.setState(Store.getUserInfo());
    }
});

module.exports = Header;
