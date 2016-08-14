var React = require('react');
var ActionCreator = require('../../actions/ActionCreator');
var ChatConstants = require('../../constants/ChatConstants');
var Socket=require("../../utils/socket");
var LoginBox = React.createClass({
    getInitialState() {
        return { name: '' };
    },
    render() {
        return (
            <div className='demo'>
                <div className='demo_login'>
                    <div className="login__check"></div>
                    <div className="login__form" onKeyDown={this._onKeyDown}>
                        <div className="login__row">
                            <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
                                <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"></path>
                            </svg>
                            <input value={this.state.name} onChange={this._onChange} type="text" className="login__input name" placeholder="随意起个名字吧"/>
                        </div>
                        <button type="button" className="login__submit" onClick={this._onClick}>开始聊闲</button>
                    </div>
                </div>
            </div>
        );
    },
    _onChange(e) {
        this.setState({ name: e.target.value });
    },
    _onClick(e) {
        if (this.state.name != "") {
            document.body.className = "loaded";
            Socket.emit('add user', this.state.name);
            ActionCreator.login(this.state.name);
        }
    },
    _onKeyDown(e){
         if (this.state.name != ""&&e.which===ChatConstants.ENTER_KEY_CODE) {
            document.body.className = "loaded";
            Socket.emit('add user', this.state.name);
            ActionCreator.login(this.state.name);
        }
    }
});
module.exports = LoginBox;