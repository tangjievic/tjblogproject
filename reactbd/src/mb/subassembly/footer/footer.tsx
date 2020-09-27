import React,{useEffect,useState} from 'react';
import classNames from 'classnames'; 
import './footer.less';

interface FooterProps {
    selecttype:string;
}

const Footer:React.FC<FooterProps> = (props)=>{
    let { selecttype } =  props;
    //let [currenttype,setCurrentType] = useState('home');

    //setCurrentType(selecttype);

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
    let goRouter = (props:any,type:string) =>{
        console.log(props)
    }
    return(
        <ul className="blog-mb__footer">
            <li className="footer-item" onClick={()=>goRouter(props,'home')}>
                <i className={home}></i>
                <span>首页</span>
            </li>
            <li className="footer-item" onClick={()=>goRouter(props,'find')}>
                <i className={find}></i>
                <span>发现</span>
            </li>
            <li className="footer-item" onClick={()=>goRouter(props,'my')}>
                <i className={my}></i>
                <span>我的</span>
            </li>
        </ul>
    )
}

export default Footer;