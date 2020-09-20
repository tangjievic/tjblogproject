import React from 'react';
import { Row, Col, Button, Tabs, Tag, Divider, Pagination,message } from 'antd';
import Bubbline from '../subassembly/bubbleline/Bubbleline';
const { TabPane } = Tabs;
function callback(key:string|number) {
    console.log(key);
}
const UserMsg = ()=>{
    return(
        <div className="view_section">
            <h2 className="hd_title tag_title">用户基本信息</h2>
            <Bubbline></Bubbline>

        </div>
    )
}
const Main:React.FC = ()=>{
    return(
        <div>
            {UserMsg()}
            <div className="view_section">
                <h2 className="hd_title tag_title">当前选择:</h2>
                <Bubbline></Bubbline>
                <div className="section-content">
                    <Tabs onChange={callback} type="card">
                        <TabPane tab="全部文章" key="1">
                        Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="热门文章" key="2">
                        Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="点赞文章" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="收集文章" key="4">
                        Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="vip专享" key="5">
                        Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="视频资源" key="6">
                        Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="其他资源" key="7">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Main