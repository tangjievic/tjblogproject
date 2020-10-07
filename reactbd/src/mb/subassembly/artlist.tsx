import React ,{useState}from 'react';
import { Pagination ,Empty } from 'antd';
import { useHistory } from 'react-router-dom'
interface ArtlistProps {
    title:string;
    artlist?:any[];
    pagenum?:number;
    total?:number;
    onChagePage?:(params:number)=>{};
}
const Artlist:React.FC<ArtlistProps> = (props) => {
    let { title,artlist,pagenum,total } = props
    let [ current,setCurrentNum] = useState(0)
    let onChange = (pageNumber:number)=>{
        setCurrentNum(pageNumber)
        if(props.onChagePage){
            props.onChagePage(current)
        }
    }
    let history = useHistory();
    let goArtDetail= (e:any,id:number|string)=>{
        e.preventDefault();
        history.push(`/artdetail?aid=${id}`)
    }
    return (

        <section className="page_section">
            <header className="section_title">{title}</header>
            <div className="section_content">
                <ul className="art_list">
                    {
                        (()=>{
                            if(!Array.isArray(artlist) || artlist.length === 0){
                                return(
                                    <li className="art_li">
                                        <Empty description="暂无数据"></Empty>
                                    </li>
                                )
                            }else{
                                artlist = artlist.map((item:any,index:number)=>{
                                    return (
                                        <li className="art_li" key={index}>
                                            <a className="art_link" href="#!" onClick={(e)=>goArtDetail(e,item.id)}>
                                                <h2 className="art_hd">{item.title}</h2>
                                                <h3 className="art_sub">{item.stitle}</h3>
                                                <div>
                                                    <span>作者：{item.author}</span>
                                                </div>
                                                <div>
                                                    <span>点击量:{item.seenum}</span>
                                                </div>
                                                <p className="art_desc">简介:{item.desc}</p>
                                            </a>
                                        </li>
                                    )
                                })

                                return artlist
                            }
                        })()
                    }
                </ul>
                <div className="art-page">
                    <div className="page_box">
                        <Pagination simple onChange={onChange}
                        current={current!==0?current:pagenum}
                        total={total} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Artlist