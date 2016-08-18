var React = require('react');
var StatusStore=require('../../stores/StatusStore');

var BoxHeader = React.createClass({
    getInitialState() {
        return {
            status: ''
        }
    },

    componentWillMount() {
        StatusStore.removeChangeListener(this._onChange);
    },
    componentDidMount() {
        StatusStore.addChangeListener(this._onChange);
    },

    render() {
        return (
            <div className="box_hd">
                {/** 
                    <a className="ext web_wechat_addfriend" href="javascript:;" title="成员"></a>
                    <a className="ext web_wechat_addfriend" href="javascript:;" title="Profile"></a>
                   */}
                <div id="chatRoomMembersWrap">

                </div>
                <div className="title_wrap">
                   	<div className="title poi">
                        <a className="title_name">{this.state.status}</a>
                    </div>
               	</div>

           	</div>
        );
    },
    _onChange() {
        this.setState(StatusStore.getTypingUser());
    }
});

module.exports = BoxHeader;
