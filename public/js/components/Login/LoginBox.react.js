var React = require('react');
var ActionCreator = require('../../actions/ActionCreator');
var ChatConstants = require('../../constants/ChatConstants');
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
        if (this.state.text != "" && e.which === ChatConstants.ENTER_KEY_CODE) {
            document.body.className = "loaded";
            ActionCreator.login(e.target.value);
            ActionCreator.getActiveUsersList(e.target.value);
        }
    }
});
module.exports = LoginBox;
