var React = require('react');

var SearchBar = React.createClass({
    render: function() {
        return (
            <div className="search_bar" id="search_bar">
                <i className="web_wechat_search"></i>
                <input className="frm_search ng-isolate-scope ng-pristine ng-valid" type="text" placeholder="搜索"/>
            </div>
        )
    }
})

module.exports = SearchBar;
