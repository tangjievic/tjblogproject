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
                    <WetMenu defaultIndex={'center_1'}>
                        <WetMenuItem index={'1'}>首页</WetMenuItem>
                        <WetMenuItem index={'2'}>前端框架</WetMenuItem>
                        <WetMenuSub index="personal_center" title="个人中心">
                            <WetMenuItem index={'center_1'}>中心主页</WetMenuItem>
                            <WetMenuItem index={'center_2'}>退出登录</WetMenuItem>
                        </WetMenuSub>
                        <WetMenuItem index={'4'}>用户登录</WetMenuItem>
                    </WetMenu>
                </div>
            </div>
        </header>
    )
}
export default Header