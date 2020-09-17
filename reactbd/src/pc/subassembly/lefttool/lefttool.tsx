import React from 'react';
import './lefttool.less';
interface LeftToolProps{

}

const leftTool:React.FC<LeftToolProps> = (props)=>{
    return (
        <aside className="wet-leftmenu fiexd">
            <div className="leftmenu_box"></div>
            <ul className="menu_top">
                <li className="leftmenu-item">
                    <a href="#!" className="item-link tjblog-user_detail">
                        <i className="iconfont icon-gerenzhongxin"></i>
                        <span>用户</span>
                    </a>
                </li>
                {/* <li  className="leftmenu-item">
                    <a href="#!" className="item-link">
                        <i className="iconfont icon-vip"></i>
                        <span>vip</span>
                    </a>
                </li> */}
                <li className="leftmenu-item">
                    <a href="#!" className="item-link tjblog-user_login">
                        <i className="iconfont icon-login"></i>
                        <span>登入</span>
                    </a>
                </li>
                {/* <li className="leftmenu-item">
                    <a href="#!" className="item-link">
                        <i className="iconfont icon-logout"></i>
                        <span>登出</span>
                    </a>

                </li> */}
            </ul>
            <ul className="menu_bottom">
                <li className="leftmenu-item">
                    <a href="#!" className="item-link">
                        <i className="iconfont icon-hangye"></i>
                        <span>分类</span>
                    </a>
                    <div className="tj-blog_class">
                        <div className="hd">
                            <span>博客文章分类</span><i className="iconfont icon-js"></i>
                        </div>
                        <ul className="tj_class">
                            <li className="class_item selected">
                                <a href="#" className="item-link">分类一</a>
                            </li>
                            <li className="class_item">
                                <a href="#" className="item-link">分类一</a>
                            </li>
                            <li className="class_item">
                                <a href="#" className="item-link">分类一</a>
                            </li>
                            <li className="class_item">
                                <a href="#" className="item-link">分类一</a>
                            </li>
                            <li className="class_item">
                                <a href="#" className="item-link">分类一</a>
                            </li>
                        </ul>
                        <div className="update_box">
                            <div className="updata">最新更新</div>
                            <a href="#" className="updta-link">分类一</a>
                        </div>
                        <div className="ft">
                            前端视界,你我同行
                        </div>
                        <div className="ft_bg"></div>
                    </div>
                </li>
                <li className="leftmenu-item">
                    <a href="#!" className="item-link">
                        <i className="iconfont icon-tool"></i>
                        <span>工具</span>
                    </a>
                    <div className="tj-blog_tool">
                        <div style={{marginTop: '7px'}} className="tool-list">
                            <a href="#!" className="jsts_code"><i className="iconfont icon-js" style={{fontSize:'32px'}}></i><span>TS/JS常用代码</span></a>
                        </div>
                        <div style={{marginTop: '20px'}} className="tool-list">
                            <a href="#!" className="cssless_code"><i className="iconfont icon-css" style={{fontSize:'32px'}}></i><span>CSS常用代码</span></a>
                        </div>
                    </div>
                </li>
                <li className="leftmenu-item">
                    <a href="#!" className="item-link">
                        <i className="iconfont icon-ui"></i>
                        <span>WetUi</span>
                    </a>
                    <div className="tj-blog_class">
                        <div className="hd">
                            WetUI 是我工作之余，方面之后业务的定制化打造的组件库，大多数都是市面上已经存在的组件，我这里只不过是依葫芦画瓢做的，不打算发布npm，就放码云，下载引入，方便自己根据项目需求改样式之类的，不过即便是如此，这个组件库还是遵循我自己整合的一些设计规则，喜欢的就给star吧！感谢！
                        </div>
                        <ul className="tool_file-ul">
                            <li>
                                <span>WeApp组件文档</span>
                                <ul className="li_ul">
                                    <li>
                                        <a href="#!" className="wetui_weapp">移动端文档</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="ft">
                            前端视界,你我同行
                        </div>
                        <div className="ft_bg"></div>
                    </div>
                </li>
                <li className="leftmenu-item">
                    <a href="https://gitee.com/thepigthatwantstofly/tjblog" target="_blank" className="item-link">
                        <i className="iconfont icon-mayun"></i>
                        <span>码云</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default leftTool