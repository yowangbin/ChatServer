var React = require('react');

var Menu = React.createClass({
    render() {
        return (
            <div id="mmpop_system_menu" className="mmpop system_menu" tabIndex="-1" style={{top: '60px', left: '85px'}}>
                <ul className="dropdown_menu">
                    <li className="last_child">
                        <a tabIndex="-1" href="javascript:;" title="退出">
                            <i className="menuicon_quit"></i>退出</a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports=Menu;