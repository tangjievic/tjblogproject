import React from 'react';
import Artlist from '../subassembly/artlist';
import { useHistory } from 'react-router-dom';

const Artpage:React.FC = (props)=>{
    let history = useHistory();
    let goBack = ()=>{
        history.goBack()
    }

    return(
        <div className="mb-main__view art_page">
            <header className="view_header">
                <div className="hd_box">
                    <div className="hd_back" onClick={goBack}></div>
                    <div className="hd_title">
                        标题
                    </div>
                </div>
            </header>
            <div className="tjblog-page">
                <Artlist title="文章列表"></Artlist>
            </div>
        </div>
    )
}

export default Artpage;