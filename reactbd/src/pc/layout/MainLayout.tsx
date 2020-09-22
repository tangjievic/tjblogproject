import React from 'react';
import './mainlayout.less';
import LeftTool from '../subassembly/lefttool/lefttool';
import Header from '../subassembly/header/Header';
import Bubline from '../subassembly/bubbleline/Bubbleline';
import BlogFooter from '../subassembly/footer/Footer';
import ad from './ad.png';
interface MainLayoutProps {

}

const MainLayout:React.FC<MainLayoutProps> = (props)=>{
    let { children } = props;
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
                            <h3 className="hd_title">AD CARD</h3>
                            <Bubline></Bubline>
                            <ul className="ad_box">
                                <img src={ad}></img>
                            </ul>
                        </div>
                    </div>
                </div>
                <BlogFooter></BlogFooter>
            </div>
        </div>
    )
}

export default MainLayout