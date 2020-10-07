import React,{ useEffect } from 'react';
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
    useEffect(()=>{
        const box = document.createElement('div');
        const view = document.querySelector('#root');
        box.classList.add('shuibo_box','wet-pc');
        if(view){
            view.appendChild(box);
        }else{
            return
        }
        function createCircle() {
            const circleEl = document.createElement('div');
            circleEl.classList.add('plugin-circle')
            circleEl.style.top = Math.random() * window.innerHeight + "px";
            circleEl.style.left = Math.random() * window.innerWidth + "px";
            box.appendChild(circleEl);
            setTimeout(() => {
                circleEl.remove()
            }, 3000)
        }
        setInterval(createCircle, 300)
    },[])
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
                                <img alt="提示" src={ad}></img>
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