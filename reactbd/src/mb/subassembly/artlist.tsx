import React from 'react';
import WetTag,{TagSize,TagType} from '../../components/tag/tag'
import { Pagination  } from 'antd';
interface ArtlistProps {
    title:string,
    artlist?:any[]
}
const Artlist:React.FC<ArtlistProps> = (props) => {
    const { title,children } = props
    return (
        <section className="page_section">
            <header className="section_title">{title}</header>
            <div className="section_content">
                <ul className="art_list">
                    <li className="art_li">
                        <a className="art_link" href="#!">
                            <h2 className="art_hd">文章标题</h2>
                            <h3 className="art_sub">文章副标题</h3>
                            <div>
                                <span>作者：</span>
                                <span>发布时间:</span>
                            </div>
                            <p className="art_desc">简介:这是一段简介</p>
                        </a>
                        <div>
                            <WetTag size={TagSize.Middle} types={TagType.Primary}>标签一</WetTag>
                            <WetTag size={TagSize.Middle} types={TagType.Primary}>标签一</WetTag>
                            <WetTag size={TagSize.Middle} types={TagType.Primary}>标签一</WetTag>
                            <WetTag size={TagSize.Middle} types={TagType.Primary}>标签一</WetTag>
                            <WetTag size={TagSize.Middle} types={TagType.Primary}>标签一</WetTag>
                            <WetTag size={TagSize.Middle} types={TagType.Primary}>标签一</WetTag>
                        </div>
                    </li>
                </ul>
                <div className="art-page">
                    <div className="page_box"><Pagination simple defaultCurrent={2} total={50} /></div>
                </div>
            </div>
        </section>
    )
}

export default Artlist