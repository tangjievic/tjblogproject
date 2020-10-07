import React from 'react';
import MainLayout from '../layout/mainLayout';
import { useHistory } from 'react-router-dom';
import '../style/mycenter.less';
import { connect } from 'react-redux';
import {message} from 'antd'
interface MycenterProps {
    userData:any
}
const toOpinion = ()=>{
    message.warn({
        content:'暂时不可用'
    })
}
const Mycenter :React.FC<MycenterProps> = (props)=>{
    let { userData } = props
    let history = useHistory();
    let gopage = (routersname:string,type:string|number)=>{
        history.push(`/${routersname}?id=${type}`)
    }
    let toLogin = ()=>{
        message.success({
            content:'即将跳转'
        })
        setTimeout(()=>{
            history.replace('/login')
        },1500)
    }
    return (
       <MainLayout selecttype="my">
           <div className="my-center hd">
               个人中心
           </div>
           {
               (()=>{
                   if((userData as any).username){
                        return(
                            <div className="my-center msg" onClick={toOpinion}>
                                <div className="username">用户名:{(userData as any).nickname?(userData as any).nickname:(userData as any).email}</div>
                                <div className="userwork">职业：{(userData as any).profession}</div>
                                <i className="icontext right_row"></i>
                            </div>
                        )
                   }else{
                        return(
                            <div className="my-center msg" onClick={toLogin}>
                                <div className="username">尚未登录</div>
                                <div className="userwork">点击进入登录页</div>
                                <i className="icontext right_row"></i>
                            </div>
                        )
                   }
               })()
           }
           {
                (()=>{
                    if((userData as any).username){
                        return(
                            <ul className="my-center list">
                                <li className="item" onClick={()=>gopage('artpage','zan')}>
                                    <i className="icontext zan"></i>
                                    <div className="label">我赞过的</div>
                                    <div className="label_sub">{(userData as any).zan_num}篇</div>
                                </li>
                                <li className="item" onClick={()=>gopage('artpage','collect')}>
                                    <i className="icontext star"></i>
                                    <div className="label">我收藏的</div>
                                    <div className="label_sub">{(userData as any).collect_num}篇</div>
                                </li>
                                <li className="item" onClick={()=>gopage('artpage','vip')}>
                                    <i className="icontext vip"></i>
                                    <div className="label">vip专享</div>
                                    <div className="label_sub">0篇</div>
                                </li>
                            </ul>
                        )
                    }
                })()
            }
            {
                (()=>{
                    if((userData as any).username){
                        return(
                            <ul className="my-center list">
                                <li className="item" onClick={toOpinion}>
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
                        )
                    }
                })()
            }      
       </MainLayout>
    )
}
const mapState = (state:any) =>{
    return {
        userData:state.userData,
    }
}
export default connect(mapState)(Mycenter);