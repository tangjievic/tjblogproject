import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames'; 
import './footer.less';

interface FooterProps {
    selecttype:string;
    gopage:()=>{};
}

const Footer:React.FC<FooterProps> = (props)=>{
    let { selecttype } =  props;
    let history = useHistory();
    let home = classNames('itemicon',{
        'home':selecttype !== 'home',
        'home-active':selecttype === 'home'
    });
    let find = classNames('itemicon',{
        'find':selecttype !== 'find',
        'find-active':selecttype === 'find'
    });
    let my   = classNames('itemicon',{
        'my':selecttype !== 'my',
        'my-active':selecttype === 'my'
    });
    let goRouter = (type:string) =>{
        // props.gopage(type);
        // console.log(props)
        history.push(`/${type}`)
    }
    return(
        <ul className="blog-mb__footer">
            <li className="footer-item" onClick={()=>goRouter('home')}>
                <i className={home}></i>
                <span>首页</span>
            </li>
            <li className="footer-item" onClick={()=>goRouter('find')}>
                <i className={find}></i>
                <span>发现</span>
            </li>
            <li className="footer-item" onClick={()=>goRouter('my')}>
                <i className={my}></i>
                <span>我的</span>
            </li>
        </ul>
    )
}

export default Footer;