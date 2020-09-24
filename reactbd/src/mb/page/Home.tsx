import React from 'react';
import MainLayout from '../layout/mainLayout';
interface HomeProps {

}
const Home:React.FC<HomeProps> = (props) =>{
    return (
        <MainLayout>
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
                <section>
                    <header></header>
                </section>
                {/*  */}
            </div>
        </MainLayout>
    )
}

export default Home