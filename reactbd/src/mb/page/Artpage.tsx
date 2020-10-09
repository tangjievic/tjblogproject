import React,{useEffect,useState } from 'react';
import Artlist from '../subassembly/artlist';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getArtList,getZanArt,getCollectArt } from '../../apilist/index';
import { urlArgs } from '../../tool/tool';

interface ArtpageProps {
    cateMsg:any[]
}

const Artpage:React.FC<ArtpageProps> = (props)=>{
    let history = useHistory();
    let params = urlArgs(history.location.search);
    let [artlist,setArtlist] = useState([]);
    let [pagenum,setPage] = useState(0);
    let [cid,setCid] = useState();
    let [total,setTotal] = useState(0);
    let goBack = ()=>{
        history.goBack()
    }
    useEffect(()=>{
        setCid(params.id)
        if(params.id=== 'collect'){
            getCollectArt({
                "page_count": 1,
                "page_size": 10,
            }).then((res:any)=>{
                //console.log(res)
                setArtlist(res.data.data);
                setPage(res.data.current_page);
                setTotal(res.data.total)
            })
        }else if(params.id === 'zan'){
            getZanArt({
                "page_count": 1,
                "page_size": 10,
            }).then((res:any)=>{
                //console.log(res)
                setArtlist(res.data.data);
                setPage(res.data.current_page);
                setTotal(res.data.total)
            })
        }else{
            getArtList({
                "id":params.id,
                "page_count": 1,
                "page_size": 10,
            }).then((res:any)=>{
                //console.log(res)
                setArtlist(res.data.data);
                setPage(res.data.current_page);
                setTotal(res.data.total)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let onChagePage = (current:number)=>{
        return  getArtList({
            "id":cid,
            "page_count": current,
            "page_size": 10,
        })
    }

    return(
        <div className="mb-main__view art_page">
            <header className="view_header">
                <div className="hd_box">
                    <div className="hd_back" onClick={goBack}></div>
                    <div className="hd_title">
                        {
                            (()=>{
                                let title:string = '';
                                //console.log(cid)
                                if(cid === 'zan'){
                                    title = '我的点赞'
                                }else if(cid === 'collect'){
                                    title = '我的收藏'
                                }else{
                                    props.cateMsg.forEach((item:any)=>{
                                        //console.log(item.id)
                                        if(Number(cid) === Number(item.id)){
                                            title = item.catename
                                        }
                                    })
                                }
                                return(
                                    <span>{title}</span>
                                )
                            })()
                        }
                    </div>
                </div>
            </header>
            <div className="tjblog-page">
                <Artlist title="全部文章" 
                    artlist={artlist} 
                    total={total} 
                    onChagePage={onChagePage}
                    pagenum={pagenum}></Artlist>
            </div>
        </div>
    )
}

const mapState = (state:any)=>{
    return {
        cateMsg:state.cateMsg
    }
}

const mapAtion = (dispatch:any)=>{
    return {

    }
}

export default connect(mapState,mapAtion)(Artpage);