var React = require('react');

var FriendsList = React.createClass({
    render() {
        return (
            <div className="scroll-wrapper scrollbar-dynamic contact_list" style={{ position: 'relative' }}>
                <div className="scrollbar-dynamic contact_list scroll-content scroll-scrolly_visible" id="navContact" style={{ marginBottom: '0px', marginRight: '0px', height: '549px' }}>
                    <div>
                        <div className="top-placeholder" style={{height: '0px'}}></div>
                        <div>
                            <h4 className="contact_title">在线用户</h4>
                        </div>
                        <div>
                            <div className="contact_item ">
                                <div className="avatar">
                                    <img className="img lazy" src="" alt=""/>
                                </div>
                                <div className="info">
                                    <h4 className="nickname">Bowen Wang</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports=FriendsList;