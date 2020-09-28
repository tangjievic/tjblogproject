import React from 'react';

const Setting :React.FC = (props)=>{
    return (
        <div className="mb-main__view art_page">
            <header className="view_header">
                <div className="hd_box">
                    <div className="hd_back"></div>
                    <div className="hd_title">
                        设置
                    </div>
                </div>
            </header>

            <ul className="my-center list setting">
                <li className="item">
                    <i className="icontext loginout"></i>
                    <div className="label setting">退出账户</div>
                </li>
           </ul>
           <div className="footer-blog_desc">TANGJIE-BLOG</div>
        </div>
    )
}

export default Setting