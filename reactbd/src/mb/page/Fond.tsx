import React,{ useState } from 'react';
import MainLayout from '../layout/mainLayout';
import search from '../style/search.png';
import { Input } from 'antd';
import Artlist from '../subassembly/artlist';
import { getArtByKeywords } from '../../apilist/index';
const { Search } = Input;

const Fonds:React.FC = (porps)=>{
    let [pagenum,setPage] = useState(0);
    let [total,setTotal] = useState(0);
    let [artlist,setArtlist] = useState([]);
    let [keywords,setKeywords] = useState('');
    let onSearch = ( keywrods:any)=>{
        setKeywords(keywords)
        getArtByKeywords({
            "page_count": 1,
            "page_size": 10,
            keywrods
        }).then((res:any)=>{
            setPage(res.data.current_page);
            setTotal(res.data.total);
            setArtlist(res.data.data);
        })
    }
    let onChagePage = (current:number)=>{
        return  getArtByKeywords({
            "page_count": current,
            "page_size": 10,
            keywords
        })
    }
    return(
        <MainLayout selecttype="find">
            <section className="find-section_hd">
                <div className="hd_box">
                    <div className="left_img">
                        <img src={search} alt="搜索图片"></img>
                    </div>
                    <div className="txt">
                        文章查找
                    </div>
                    <div className="rt_bg">
                        <div className="rt_dot"></div>
                    </div>
                </div>
                <form className="hd_form">
                    <Search
                        placeholder="输入关键字"
                        enterButton="确认"
                        size="large"
                        onSearch={keywords => onSearch(keywords)}
                        />
                </form>
            </section>
            <div className="tjblog-page">
                <Artlist  artlist={artlist} 
                total={total} 
                onChagePage={onChagePage}
                pagenum={pagenum}
                title="查找结果"></Artlist>
            </div>
        </MainLayout>
    )
}

export default Fonds