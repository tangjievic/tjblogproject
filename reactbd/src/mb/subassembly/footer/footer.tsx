import React,{useEffect,useState} from 'react';
import classNames from 'classnames'; 
import './footer.less';

const Footer:React.FC = (props)=>{
    let [currenttype,setCurrentType] = useState('home');
    let home = classNames('itemicon',{
        'home':currenttype !== 'home',
        'home-active':currenttype === 'home'
    });
    let find = classNames('itemicon',{
        'find':currenttype !== 'find',
        'find-active':currenttype === 'find'
    });
    let my   = classNames('itemicon',{
        'my':currenttype !== 'my',
        'my-active':currenttype === 'my'
    });
    let goRouter = (props:any,type:string) =>{
        
    }
    return(
        <ul className="blog-mb__footer">
            <li className="footer-item" onClick={(e)=>goRouter(props,'home')}>
                <i className={home}></i>
                <span>首页</span>
            </li>
            <li className="footer-item" onClick={(e)=>goRouter(props,'find')}>
                <i className={find}></i>
                <span>发现</span>
            </li>
            <li className="footer-item" onClick={(e)=>goRouter(props,'my')}>
                <i className={my}></i>
                <span>我的</span>
            </li>
        </ul>
    )
}

export default Footer;