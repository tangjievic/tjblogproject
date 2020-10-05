import React from 'react';
import MainLayout from '../layout/mainLayout';
import { useHistory } from 'react-router-dom';
import '../style/mycenter.less';

const Mycenter :React.FC = (props)=>{
    let history = useHistory();
    let gopage = (routersname:string,type:string|number)=>{
        history.push(`/${routersname}`)
    }
    return (
       <MainLayout selecttype="my">
           <div className="my-center hd">
               个人中心
           </div>
           <div className="my-center msg">
               <div className="username">用户名:想要飞翔的猪</div>
               <div className="userwork">职业：前端工程师</div>
               <i className="icontext right_row"></i>
           </div>
           <ul className="my-center list">
                <li className="item" onClick={()=>gopage('artpage','id')}>
                    <i className="icontext zan"></i>
                    <div className="label">我赞过的</div>
                    <div className="label_sub">0篇</div>
                </li>
                <li className="item" onClick={()=>gopage('artpage','id')}>
                    <i className="icontext star"></i>
                    <div className="label">我收藏的</div>
                    <div className="label_sub">0篇</div>
                </li>
                <li className="item" onClick={()=>gopage('artpage','id')}>
                    <i className="icontext vip"></i>
                    <div className="label">vip专享</div>
                    <div className="label_sub">0篇</div>
                </li>
           </ul>
           <ul className="my-center list">
                <li className="item">
                    <i className="icontext yijian"></i>
                    <div className="label">意见反馈</div>
                    <div className="label_sub"></div>
                </li>
                <li className="item" onClick={()=>gopage('setting','id')}>
                    <i className="icontext setting"></i>
                    <div className="label">设置</div>
                    <div className="label_sub"></div>
                </li>
           </ul>
       </MainLayout>
    )
}

export default Mycenter;