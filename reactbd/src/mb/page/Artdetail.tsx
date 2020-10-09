import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { getArt } from '../../apilist/index';
import { urlArgs } from '../../tool/tool';
import '../style/artdetail.less';
const Artdetail:React.FC = (props) =>{
    let [art,setArt] = useState({})
    let history = useHistory();
    let params = urlArgs(history.location.search)
    let goBack = ()=>{
        history.goBack()
    }
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        getArt({
            aid:params.aid
        }).then((res:any)=>{
            setArt(res.data)
        })
    },[params])
    return (
        <div className="mb-main__view art_page">
             <header className="view_header">
                <div className="hd_box">
                    <div className="hd_back" onClick={goBack}></div>
                    <div className="hd_title">
                        {(art as any).title}
                    </div>
                </div>
            </header>
            <section className="tjblog-art">
                <div className="author">
                    作者：{(art as any).author}
                </div>
                <div className="seenum">
                    点击量：{(art as any).seenum}
                </div>
                <div className="desc">
                    {(art as any).desc}
                </div>
                <article className="markdown-body" dangerouslySetInnerHTML={{
                    __html:(art as any).content
                }}>
                
                </article>
            </section>
        </div>
    )
}

export default Artdetail;