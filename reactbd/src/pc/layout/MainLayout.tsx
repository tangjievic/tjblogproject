import React from 'react';
import './mainlayout.less';
import LeftTool from '../subassembly/lefttool/lefttool';
import Header from '../subassembly/header/Header';
import Bubline from '../subassembly/bubbleline/Bubbleline';
interface MainLayoutProps {

}

const MainLayout:React.FC<MainLayoutProps> = (props)=>{
    let { children,...others } = props;
    console.log(children)
    return(
        <div className="wetui-page">
            <div className="view">
                <LeftTool></LeftTool>
                <Header></Header>
                <div className="view_box">
                    <div className="view_right">
                        {children} 
                    </div>
                    <div className="view_left">
                        <div className="left_planels">
                            <h3>AUTHOR CARD</h3>
                            <Bubline></Bubline>
                            <ul className="msglist">
                                <li className="msglist__item profession">职业：前端海里游泳的鱼</li>
                                <li className="msglist__item site">住址：深圳的某个地方蜗居</li>
                            </ul>
                            <div className="mycard_btn">
                                <div className="btn-item">
                                    <a className="wet-btn wet-btn__block" href="https://blog.csdn.net/tangjie109411" target="_blank">个人CSDN</a>
                                </div>
                                <div className="btn-item">
                                    <a className="wet-btn wet-btn__block" href="#">更多信息</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout