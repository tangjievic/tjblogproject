import React from 'react';
import MainLayout from '../layout/mainLayout';
import { Button } from 'antd';
import Artlist from '../subassembly/artlist';
import '../style/home.less';
interface HomeProps {

}
const Home:React.FC<HomeProps> = (props) =>{
    //console.log(props)
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
                        <a className="link">
                            <i  className="itemicon icon_calssify"></i>
                            <span>分类</span>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link">
                            <i className="itemicon icon_video"></i>
                            <span>视频</span>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link">
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
                            <a>标题</a>
                        </div>
                        <div className="art_sub">副标题</div>
                        <p className="art_desc">简介:大安德森技法卢卡斯的飞洒地方</p>
                        <div className="art_msg">
                            <span>作者:</span>
                            <span>发布时间:</span>
                        </div>
                        <div>

                        </div>
                        <div className="art_btn">
                            <Button block size="middle">点击查看</Button>
                        </div>
                    </div>
                </section>
                {/* 文章列表 */}
                <Artlist></Artlist>
            </div>
        </MainLayout>
    )
}

export default Home