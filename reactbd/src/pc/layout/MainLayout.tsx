import React from 'react';
import './mainlayout.less';
import LeftTool from '../subassembly/lefttool/lefttool';
import Header from '../subassembly/header/Header';
interface MainLayoutProps {

}

const MainLayout:React.FC<MainLayoutProps> = (props)=>{
    let { children,...others } = props;
    return(
        <div className="wetui-page">
            <div className="view">
                <LeftTool></LeftTool>
                <Header></Header>
                <div className="view_right">
                    {children} 
                </div>
                <div className="view_left">
                    {children} 
                </div>
            </div>
        </div>
    )
}

export default MainLayout