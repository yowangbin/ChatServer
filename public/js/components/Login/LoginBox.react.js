var React = require('react');
var ActionCreator = require('../../actions/ActionCreator');
var ChatConstants = require('../../constants/ChatConstants');
var Socket=require("../../utils/socket");
var LoginBox = React.createClass({
    getInitialState() {
        return { text: '' };
    },

    render() {
        return (
            <div className="login_box">
                <input type="text" className="frm_input_box"
                    ref="username"
                    value={this.state.text}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown}
                    />
            </div>
        );
    },
    _onChange(e) {
        this.setState({ text: e.target.value });
    },
    _onKeyDown(e) {
        var username=e.target.value;
        if (this.state.text != "" && e.which === ChatConstants.ENTER_KEY_CODE) {
            document.body.className = "loaded";
            Socket.emit('add user', username);
            ActionCreator.login(username);
        }
    }
});
module.exports = LoginBox;
