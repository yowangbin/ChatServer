var React = require('react');
var FriendsStore = require('../../stores/FriendsStore');

var FriendsList = React.createClass({
    getInitialState() {
        return FriendsStore.getUserList();
    },
    componentWillMount() {
        FriendsStore.removeChangeListener(this._onChange);
    },

    componentDidMount() {
        FriendsStore.addChangeListener(this._onChange);
    },

    render() {
        var ContactList=this.state.list.map(function(item,index){
            return <ContactItem key={item._id} name={item.name} loginTime={item.loginTime}/>;
        });
        return (
            <div className="scroll-wrapper scrollbar-dynamic contact_list" style={{ position: 'relative' }}>
                <div className="scrollbar-dynamic contact_list scroll-content scroll-scrolly_visible" id="navContact" style={{ marginBottom: '0px', marginRight: '0px', height: '549px' }}>
                    <div>
                        <div className="top-placeholder" style={{ height: '0px' }}></div>
                        <div>
                            <h4 className="contact_title">在线用户:{this.state.total}</h4>
                        </div>
                        <div>
                            {ContactList}
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    _onChange() {
        if (this.isMounted())
            this.setState(FriendsStore.getUserList());
    }
});
var ContactItem = React.createClass({
    render() {
        return (
            <div>
                <div className="contact_item ">
                    <div className="avatar">
                        <img className="img lazy" src="../../images/avatars/1.jpg" alt=""/>
                    </div>
                    <div className="info">
                        <h4 className="nickname">{this.props.name}</h4>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = FriendsList;