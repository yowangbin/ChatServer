var React = require('react');
var $ = require('jquery');
var Pubsub = require('pubsub-js');
var ActionCreator = require('../../actions/ActionCreator');
var ChatConstants = require('../../constants/ChatConstants');
var Socket = require("../../utils/socket");
var LoginBox = React.createClass({
    getInitialState() {
        return { name: '' };
    },
    componentDidMount() {

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
                            <input autoFocus value={this.state.name} onChange={this._onChange} type="text" className="login__input name" placeholder="随意起个名字吧"/>
                        </div>
                        <button ref='login' type="button" className="login__submit" onClick={this._onClick}><div className='ripple'></div>开始聊闲</button>
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
            this._loginAnimation(e);
        }
    },
    _loginAnimation(e) {
        var animating = false,
            submitPhase1 = 1100,
            submitPhase2 = 400,
            logoutPhase1 = 800,
            $login = $(".demo_login");
        var name = this.state.name;
        // $app = $(".app");
        function ripple(elem, e) {
            $(".ripple").remove();
            var elTop = elem.offset().top,
                elLeft = elem.offset().left,
                x = e.pageX - elLeft,
                y = e.pageY - elTop;
            var $ripple = $("<div class='ripple'></div>");
            $ripple.css({ top: y, left: x });
            elem.append($ripple);
        };
        if (animating) return;
        animating = true;
        var that = this.refs.login;
        ripple($(that), e);
        $(that).addClass("processing");
        setTimeout(function () {
            $(that).addClass("success");
            setTimeout(function () {
                //         // $app.show();
                //         // $app.css("top");
                //         // $app.addClass("active");
                document.body.className = "loaded";
                Socket.emit('add user', name);
                ActionCreator.login(name);
                Pubsub.publish('login success');
            }, submitPhase2 - 70);

            setTimeout(function () {
                $login.hide();
                $login.addClass("inactive");
                animating = false;
                $(that).removeClass("success processing");
            }, submitPhase2);
        }, submitPhase1);
    },
    _onKeyDown(e) {
        if (this.state.name != "" && e.which === ChatConstants.ENTER_KEY_CODE) {
            this._loginAnimation(e);
        }
    }
});
module.exports = LoginBox;