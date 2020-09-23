import React from 'react';
import './mainlayout.less';
import Footer from '../subassembly/footer/footer';

const MainLayout:React.FC = (props)=>{
    const { children } = props;
    return (
        <div className="mb-main__view">
            <div className="view_box">
                <div className="box_hd-bg">
                    <div className="card card_one"></div>
                    <div className="card card_two"></div>
                    <div className="card card_three"></div>
                </div>
                <div className="view_content">
                {children}
                </div>
            </div>
            <footer className="main-footer">
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default MainLayout