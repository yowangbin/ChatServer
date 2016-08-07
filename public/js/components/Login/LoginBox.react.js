var React = require('react');
var ActionCreator = require('../../actions/ActionCreator');
var ENTER_KEY_CODE=13;
var LoginBox = React.createClass({
    getInitialState:function(){
        return {text:''}
    },
    
    render: function() {
        return (
            <div className="login_box">
                <input type="text"
                ref="username"    
                   value={this.state.text}
                   onChange={this._onChange}
                   onKeyDown={this._onKeyDown}
                   />
            </div>
        )
    },
    _onChange:function(e){
        this.setState({text:e.target.value})
    },
    _onKeyDown:function(e){
        if (this.state.text != "" && e.which === ENTER_KEY_CODE) {
            document.body.className = "loaded";
            ActionCreator.login(e.target.value);
        }
    }

});
module.exports = LoginBox;
