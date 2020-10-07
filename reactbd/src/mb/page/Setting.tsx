import React from 'react';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import Cookies from 'js-cookie';
const Setting :React.FC = (props)=>{
    let history = useHistory();
    let goBack = ()=>{
        history.goBack()
    }
    let loginOut = ()=>{
        Cookies.remove('token');
        Cookies.remove('username');
        message.success('退出成功');
        setTimeout(()=>{
            history.replace('/home');
        },500)
    }
    return (
        <div className="mb-main__view art_page">
            <header className="view_header">
                <div className="hd_box">
                    <div className="hd_back" onClick={goBack}></div>
                    <div className="hd_title">
                        设置
                    </div>
                </div>
            </header>

            <ul className="my-center list setting">
                <li className="item" onClick={loginOut}>
                    <i className="icontext loginout"></i>
                    <div className="label setting">退出账户</div>
                </li>
           </ul>
           <div className="footer-blog_desc">TANGJIE-BLOG</div>
        </div>
    )
}

export default Setting