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
            </div>
        </MainLayout>
    )
}

export default Home