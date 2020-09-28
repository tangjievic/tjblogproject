import React from 'react';
import MainLayout from '../layout/mainLayout';
import search from '../style/search.png';
import { Input } from 'antd';
import Artlist from '../subassembly/artlist';
const { Search } = Input;

const Fonds:React.FC = (porps)=>{
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
                        onSearch={value => console.log(value)}
                        />
                </form>
            </section>
            <div className="tjblog-page">
                <Artlist title="查找结果"></Artlist>
            </div>
        </MainLayout>
    )
}

export default Fonds