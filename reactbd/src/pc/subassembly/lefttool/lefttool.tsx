import React ,{ useEffect,useState } from 'react';
import './lefttool.less';
import Cookies from 'js-cookie';
import { LINKURL } from '../../../apilist/method';
import { getNew } from '../../../apilist';
import { message } from 'antd';
import { connect } from 'react-redux';
interface LeftToolProps{
    cateMsg?:any;
}

const LeftTool:React.FC<LeftToolProps> = (props)=>{
    let { cateMsg } = props;

    let [newart,setNewArt] = useState({});

    useEffect(()=>{
        getNew().then((res:any)=>{
            //console.log(res,'newlist')
            setNewArt(res.data[0])
        })
    },[])

    let goMyCenter = (e:any)=>{
        e.preventDefault();
    }

    let loginOut = (e:any) =>{
        e.preventDefault();
        Cookies.remove('token');
        Cookies.remove('username');
        message.success('退出成功');
        setTimeout(()=>{
            window.open(`${LINKURL}`,"_self")
        },1000)
    }

    let goPageCate = (e:any,id:number|string)=>{
        e.preventDefault();
        window.open(`${LINKURL}/artlist.html?cid=${id}`,"_self")
    }

    let goNewCate = (e:any)=>{
        e.preventDefault();
        window.open(`${LINKURL}/artlist.html?cid=${(newart as any).cate_id}`,"_self")
    }

    let goTScodePage =(e:any)=>{
        e.preventDefault();
        message.warn('暂不可使用');
    }

    let goCsscodePage = (e:any)=>{
        e.preventDefault();
        message.warn('暂不可使用');
    }

    return (
        <aside className="wet-leftmenu fiexd">
            <div className="leftmenu_box"></div>
            <ul className="menu_top">
                <li className="leftmenu-item selected">
                    <a href="#!" className="item-link tjblog-user_detail" onClick={(e)=>goMyCenter(e)}>
                        <i className="iconfont icon-gerenzhongxin"></i>
                        <span>用户</span>
                    </a>
                </li>
                <li className="leftmenu-item">
                    <a href="#!" className="item-link" onClick={(e)=>loginOut(e)}>
                        <i className="iconfont icon-logout"></i>
                        <span>登出</span>
                    </a>
                </li>
            </ul>
            <ul className="menu_bottom">
                <li className="leftmenu-item">
                    <a href="#!" className="item-link">
                        <i className="iconfont icon-hangye"></i>
                        <span>分类</span>
                    </a>
                    <div className="tj-blog_class">
                        <div className="hd">
                            <span>博客文章分类</span><i className="iconfont icon-js"></i>
                        </div>
                        <ul className="tj_class">
                            {
                                (()=>{
                                    if(cateMsg&&cateMsg.length!==0){
                                        return cateMsg.map((item:any,index:number)=>{
                                            if(item.pid!==0){
                                                return (
                                                    <li className="class_item" key={index}>
                                                        <a href="#!" className="item-link" onClick={(e)=>goPageCate(e,item.id)}>{item.catename}</a>
                                                    </li>
                                                )
                                            }
                                        })
                                    }else{
                                        return(
                                            <li className="class_item selected">
                                                <a href="#!" className="item-link">暂无分类</a>
                                            </li>
                                        )
                                    }
                                })()
                            }
                        </ul>
                        <div className="update_box">
                            <div className="updata">最新更新</div>
                            <a href="#" className="updta-link" onClick={(e)=>goNewCate(e)}>{
                                (()=>{
                                    if(cateMsg&&cateMsg.length!==0){
                                        for(let i = 0;i<cateMsg.length;i++){
                                            if(cateMsg[i].id === (newart as any).cate_id){
                                                return cateMsg[i].catename
                                            }
                                        }
                                    }else{
                                        return '暂无'
                                    }
                                })()
                            }</a>
                        </div>
                        <div className="ft">
                            前端视界,你我同行
                        </div>
                        <div className="ft_bg"></div>
                    </div>
                </li>
                <li className="leftmenu-item">
                    <a href="#!" className="item-link">
                        <i className="iconfont icon-tool"></i>
                        <span>工具</span>
                    </a>
                    <div className="tj-blog_tool">
                        <div style={{marginTop: '7px'}} className="tool-list">
                            <a href="#!" className="jsts_code" onClick={(e)=>goTScodePage(e)}>
                                <i className="iconfont icon-js" style={{fontSize:'32px'}}></i>
                                <span>TS/JS常用代码</span>
                            </a>
                        </div>
                        <div style={{marginTop: '20px'}} className="tool-list">
                            <a href="#!" className="cssless_code" onClick={(e)=>goCsscodePage(e)}>
                                <i className="iconfont icon-css" style={{fontSize:'32px'}}></i>
                                <span>CSS常用代码</span>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="leftmenu-item">
                    <a href="#!" className="item-link">
                        <i className="iconfont icon-ui"></i>
                        <span>WetUi</span>
                    </a>
                    <div className="tj-blog_class">
                        <div className="hd">
                            WetUI 是我工作之余，方面之后业务的定制化打造的组件库，大多数都是市面上已经存在的组件，我这里只不过是依葫芦画瓢做的，不打算发布npm，就放码云，下载引入，方便自己根据项目需求改样式之类的，不过即便是如此，这个组件库还是遵循我自己整合的一些设计规则，喜欢的就给star吧！感谢！
                        </div>
                        <ul className="tool_file-ul">
                            <li>
                                <span>WeApp组件文档</span>
                                <ul className="li_ul">
                                    <li>
                                        <a href="#!" className="wetui_weapp" onClick={(e)=>goCsscodePage(e)}>移动端文档</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="ft">
                            前端视界,你我同行
                        </div>
                        <div className="ft_bg"></div>
                    </div>
                </li>
                <li className="leftmenu-item">
                    <a href="https://gitee.com/thepigthatwantstofly/tjblog" target="_blank" className="item-link">
                        <i className="iconfont icon-mayun"></i>
                        <span>码云</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

const mapState = (state:any) =>{
    return {
        cateMsg:state.cateMsg
    }
}

export default connect(mapState,)(LeftTool)