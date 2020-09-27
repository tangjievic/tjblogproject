import React from 'react';
import './mainlayout.less';
import Footer from '../subassembly/footer/footer';

interface MainLayoutProps {
    selecttype:string
}

const MainLayout:React.FC<MainLayoutProps> = (props)=>{
    const { children,selecttype } = props;
    return (
        <div className="mb-main__view">
            <div className="view_box">
                <div className="view_content">
                {children}
                </div>
            </div>
            <footer className="main-footer">
                <Footer selecttype={selecttype}></Footer>
            </footer>
            <div className="ios-salf_padding"></div>
        </div>
    )
}

export default MainLayout