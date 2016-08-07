var React = require('react');

var style = {
    'visibility': 'visible',
    'width': 'auto'
}
var ChatList = React.createClass({
    render: function() {
        return (
            <div className="nav_view" style={style}>
            </div>
        )
    }
})

module.exports = ChatList;
