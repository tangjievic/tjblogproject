import React ,{ useState }from 'react';
import WetTag,{TagType } from '../../components/tag/tag';
import { Pagination,Button,Empty } from 'antd';
import '../style/artlist.less';
import { LINKURL } from  '../../apilist/method';
import { formatDate } from '../../tool/tool';

interface ArtlistProps {
    artlist?:any[];
    pagenum?:number;
    total?:number;
    onChagePage?:(params:number)=>{};
}
const Artlist:React.FC<ArtlistProps> = (props)=>{
    let { artlist,pagenum,total } = props;
    //console.log(artlist)
    let [ current,setCurrentNum] = useState(0)
    let onChange = (pageNumber:number)=>{
        setCurrentNum(pageNumber)
        if(props.onChagePage){
            props.onChagePage(current)
        }
    }
    let goArtPage = (id:number|string)=>{
        window.open(`${LINKURL}/artical.html?aid=${id}`);
    }
    return(
        <div className="main__articel">
            <ul>
                {
                    (()=>{
                        if(!artlist||artlist.length===0){
                            return (
                                <li className="art_ls">
                                     <Empty description="暂无数据"></Empty>
                                </li>
                            )
                        }else{
                            return artlist.map((item:any,index:number)=>{
                                return(
                                    <li className="art_ls" key={index}>
                                        <div className="ls_tagbox">
                                            <h3 className="art_h">
                                            {
                                                (() => {
                                                    if (Number(item.type) === 0) {
                                                        return (
                                                            <WetTag tagshape="circle" types={TagType.Success}>原</WetTag>
                                                        )
                                                    } else if (Number(item.type) === 1) {
                                                        return (
                                                            <WetTag tagshape="circle" types={TagType.Warn}>转</WetTag>
                                                        )
                                                    } else if (Number(item.type) === 2) {
                                                        return (
                                                            <WetTag tagshape="circle" types={TagType.Info}>教</WetTag>
                                                        )
                                                    } else {
                                                        return (
                                                            <WetTag tagshape="circle" types={TagType.Primary}>杂</WetTag>
                                                        )
                                                    }
                                                })()
                                            }
                                                <a href={`${LINKURL}/artical.html?aid=${item.id}`} className="artlist-link">
                                                    {item.title}
                                                </a>
                                            </h3>
                                            <div className="art_tag">
                                            {
                                                (() => {
                                                    if (Number(item.islogin) === 0) {
                                                        return (
                                                            <WetTag types={TagType.Success}>公众文章</WetTag>
                                                        )
                                                    } else if (Number(item.islogin) === 1) {
                                                        return (
                                                            <WetTag types={TagType.Risk}>非公众文章</WetTag>
                                                        )
                                                    }
                                                })()
                                            }
                                            {
                                                (()=>{
                                                    if (Number(item.isvip) === 1) {
                                                        return (
                                                            <WetTag types={TagType.Risk}>vip文章</WetTag>
                                                        )
                                                    }
                                                })()
                                            }
                                            </div>
                                        </div>
                                        <p className="art_desc">
                                        {item.desc}
                                        </p>
                                        <div className="btn_wrapper">
                                            <div className="art_base">
                                                <span><i className="iconfont icon-icon-awsauthor"></i>&nbsp;作者：&nbsp;{item.author}</span>
                                            <span><i className="iconfont icon-friend"></i>&nbsp;发布时间：&nbsp;{formatDate(item.createtime)}</span>
                                                <span><i className="iconfont icon-fire"></i>&nbsp;点击量：&nbsp;{item.seenum}</span>
                                            </div>
                                            <div className="btn_div">
                                                {/* <a href="/article/aid/18.html" className="wet-btn">阅读详情</a> */}
                                                <Button size="large" onClick={()=>goArtPage(item.id)}>阅读详情</Button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    })()
                }
            </ul>
            <div className="articel_page">
                <Pagination onChange={onChange}
                current={current!==0?current:pagenum}
                total={total} pageSize={10} 
                showSizeChanger={false}/>           
            </div>

        </div>
    )
}

export default Artlist