import React from 'react';
import './header.less';
import { WetMenu, WetMenuItem }from '../../../components/navmenu/menu';
interface HeaderParams{

}

const Header:React.FC<HeaderParams> = (props)=>{
    return(
        <header className="tj-blog__hd">
            <div className="hd__box">
                <div className="hd_logo">TANGJIE-BLOG</div>
                <div className="nav_right">
                    <WetMenu defaultIndex={'1-4'}>
                        <WetMenuItem index={'1'}>首页</WetMenuItem>
                        <WetMenuItem index={'2'}>前端框架</WetMenuItem>
                        <WetMenuItem index={'1-4'}>前端框架</WetMenuItem>
                    </WetMenu>
                </div>
            </div>
        </header>
    )
}
export default Header