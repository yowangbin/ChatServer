var React = require('react');

var ReadList = React.createClass({
    render() {
        return (
            <div className="nav_view" style={{ visibility: 'visible', width: 'auto' }}>
                <div className="scroll-wrapper read_list scrollbar-dynamic" style={{ position: 'relative' }}>
                    <div className="read_list scrollbar-dynamic scroll-content" style={{ marginBottom: '0px', marginRight: '0px', height: '549px' }}>
                        <p className="ico_loading">热门暂未开放...</p>
                    </div>
                </div>
            </div>
        );
    }
});
//  <p className="ico_loading">
//                             <img src="https://res.wx.qq.com/zh_CN/htmledition/v2/images/icon/ico_loading2e4e03.gif" alt=""/>加载中...
//                         </p>
// <div>
//                             <div className="top-placeholder" style={{ height: '0px' }}></div>
//                             <div>
//                                 <div className="just_for_bg first">
//                                     <div className="read_item_hd">
//                                         <p className="date">10: 29</p>
//                                         <div className="avatar">
//                                             <img className="img" src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=0&amp;username=@494c0237fa51d89c006ffe8b8b0528e2&amp;skey=@crypt_fe65a9f6_9798f23467d7d34b86b094c75292dbe9" alt=""/>
//                                         </div>
//                                         <p className="info">
//                                             <span className="username">煎蛋</span>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="read_item slide-left active">
//                                     <div className="cont">
//                                         <h3 className="title">英国人寻找失踪老龟找出了Pokemon Go的感觉</h3>
//                                     </div>
//                                     <div className="ext">
//                                         <div className="cover">
//                                             <div className="img" style={{}}></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
module.exports=ReadList;