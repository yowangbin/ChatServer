var React = require('react');

var Profile = React.createClass({
    render() {
        return (
            <div id="mmpop_profile" className="mmpop profile_mini_wrap scale-fade" tabIndex="-1" style={{ top: '74px', left: '58px' }}>
                <div className="profile_mini">
                    <div className="profile_mini_hd">
                        <div className="avatar">
                            <img className="img" src="" alt=""/>
                        </div>
                    </div>
                    <div className="profile_mini_bd">
                        <div className="nickname_area">
                            <a className="opt" href="javascript:;">
                                <i className="web_wechat_tab_launch-chat"></i>
                            </a>
                            <h4 className="nickname">Aha！！</h4>
                            <i className="web_wechat_men"></i>
                        </div>
                        <div className="meta_area">
                            <div className="meta_item">
                                <label className="label" htmlFor="">备注：</label>
                                <p className="value J_Text" contentEditable=""></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})

module.exports=Profile;