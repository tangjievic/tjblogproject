import React from 'react';
import './header.less';
import { WetMenu, WetMenuItem,WetMenuSub }from '../../../components/navmenu/menu';
interface HeaderParams{

}

const Header:React.FC<HeaderParams> = (props)=>{
    return(
        <header className="tj-blog__hd">
            <div className="hd__box">
                <div className="hd_logo">TANGJIE-BLOG</div>
                <div className="nav_right">
                    <WetMenu defaultIndex={'3-3'}>
                        <WetMenuItem index={'1'}>首页</WetMenuItem>
                        <WetMenuItem index={'2'}>前端框架</WetMenuItem>
                        <WetMenuSub index="3" title="副标题">
                            <WetMenuItem index={'3-1'}>副标题</WetMenuItem>
                            <WetMenuItem index={'3-2'}>副标题</WetMenuItem>
                            <WetMenuItem index={'3-3'}>副标题</WetMenuItem>
                        </WetMenuSub>
                        <WetMenuItem index={'4'}>用户登录</WetMenuItem>
                        <WetMenuItem index={'5'}>
                            <i className="wet-icon"></i>
                            <span className="login_text">登录</span>
                        </WetMenuItem>
                    </WetMenu>
                </div>
            </div>
        </header>
    )
}
export default Header