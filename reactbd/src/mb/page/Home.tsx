import React,{ useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom'
import MainLayout from '../layout/mainLayout';
import { Button,Modal,message } from 'antd';
import Artlist from '../subassembly/artlist';
import '../style/home.less';
import { getArtList } from '../../apilist/index';
import { connect } from 'react-redux';
import { getUserMsgAction,getCateMsgAction } from '../../store/actioncreator';
interface HomeProps {
    reqUserData:()=>{};
    reqCateMsg:()=>{};
    cateMsg:any[];
}
const Home:React.FC<HomeProps> = (props) =>{
    //console.log(props)
    const { reqCateMsg,reqUserData } = props;
    reqCateMsg();
    reqUserData();
    let history = useHistory();
    let [visible,setVisibel] = useState(false);
    //let [catelist,setCateList] = useState([]);
    let [artlist,setArtlist] = useState([]);
    let [newart,setNewArt] = useState({});
    let [pagenum,setPage] = useState(0);
    let [total,setTotal] = useState(0);
    let [selectcate,setSelectCate] = useState(0);
    useEffect(()=>{
        getArtList({
            "id":'',
            "page_count": 1,
            "page_size": 10,
        }).then((res:any)=>{
            setArtlist(res.data.data);
            setNewArt(res.data.data[0]);
            setPage(res.data.current_page);
            setTotal(res.data.total)
        })
    },[])
    
    let onChagePage = (current:number)=>{
        return  getArtList({
            "id":'',
            "page_count": current,
            "page_size": 10,
        })
    }
    let handleOk = () => {
        setVisibel(false)
        history.push(`/artpage/?id=${selectcate}`)
    }
    
    let handleCancel = () => {
        setVisibel(false)
    }

    let openModel = (e:any)=>{
        e.preventDefault();
        setVisibel(true)
    }

    let openVeido = (e:any) =>{
        e.preventDefault();
        history.push(`/veidoList`)
    }

    let openManual = (e:any)=>{
        e.preventDefault();
        message.warn({
            content:'暂未开放'
        })
    }

    let goCatePage = (id:number)=>{
        setSelectCate(id)
    }
    //渲染文章分类列表
    let rendCateBtn = (catelist:any[]) =>{
        //console.log(catelist)
        catelist = catelist.map((item:any,index:number)=>{
            if(item.pid === 0){
                return
            }else{
                return (<li key={index}>  
                    <Button size="middle" block onClick={()=>goCatePage(item.id)}>{item.catename}</Button>
                </li>)
            }
        })
        return catelist
    }

    return (
        <MainLayout selecttype="home">
            <div className="box_hd-bg">
                <div className="card card_one"></div>
                <div className="card card_two"></div>
                <div className="card card_three"></div>
            </div>
            <div className="tjblog-page">
                <div className="header">欢迎来到TJ-BLOG</div>
                <div className="tips">博客类网站，移动端只适合游览熟悉知识点，如若需加强技术请移步至pc端，边看文章边实践</div>
                <ul className="home_ulli">
                    <li className="item">
                        <a className="link" onClick={(e) => openModel(e)}>
                            <i  className="itemicon icon_calssify"></i>
                            <span>分类</span>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" onClick={(e)=> openVeido(e)}>
                            <i className="itemicon icon_video"></i>
                            <span>视频</span>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" onClick={(e)=> openManual(e)}>
                            <i className="itemicon icon_manual"></i>
                            <span>手册</span>
                        </a>
                    </li>
                </ul>
                {/* 最新更新文章 */}
                <section className="page_section">
                    <header className="section_title">最近更新</header>
                    <div className="section_content new">
                        <div className="art_hd">
                            <a>{(newart as any).title}</a>
                        </div>
                        <div className="art_sub">{(newart as any).stitle}</div>
                        <p className="art_desc">简介:{(newart as any).desc}</p>
                        <div className="art_msg">
                            <span>作者:{(newart as any).author}</span>
                        </div>
                        <div className="art_msg">
                            <span>点击量:{(newart as any).seenum}</span>
                        </div>
                        <div className="art_btn">
                            <Button block size="middle">点击查看</Button>
                        </div>
                    </div>
                </section>
                {/* 文章列表 */}
                <Artlist title="全部文章" 
                artlist={artlist} 
                total={total} 
                onChagePage={onChagePage}
                pagenum={pagenum}></Artlist>
            </div>
            <Modal
                title="文章分类选择"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="确认"
                cancelText="取消"
                >
                <ul className="blog-artlist">
                   {rendCateBtn(props.cateMsg)}
                </ul>
            </Modal>
        </MainLayout>
    )
}
const mapState = (state:any) =>{
    return {
        userData:state.userData,
        cateMsg:state.cateMsg
    }
}
 
const mapAtion = (dispatch:any) =>{
    return {
        reqUserData(){
            const action = getUserMsgAction()
            dispatch(action)
        },
        reqCateMsg(){
            const action = getCateMsgAction()
            dispatch(action)
        }
    }
}
export default connect(mapState,mapAtion)(Home as any)