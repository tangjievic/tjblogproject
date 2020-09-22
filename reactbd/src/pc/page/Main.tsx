import React,{useState} from 'react';
import { Row, Col, Button, Tabs } from 'antd';
import Bubbline from '../subassembly/bubbleline/Bubbleline';
import WetTag,{TagSize,TagType}from '../../components/tag/tag';
import novip from './novip.png';
import vip from './vip.png'

function crrentSelectTxt(params:string|number){
    let text = ''
    switch(params){
        case '1':
            text = "全部文章";
            break;
        case '2':
            text = "热门文章";
            break;
        case '3':
            text = "点赞文章";
            break;
        case '4':
            text = "收集文章";
            break;
        case '5':
            text = "vip专享";
            break;
        case '6':
            text = "视频资源";
            break;
        case '7':
            text = "文章查询";
            break;
        default:
            text = "全部文章";
            break;

    }
    return text
}
const { TabPane } = Tabs;
const UserMsg = ()=>{
    return(
        <div className="view_section">
            <h2 className="hd_title">我的信息</h2>
            <Bubbline></Bubbline>
            <div className="section-content">
                <Row>
                    <Col span={4}>
                        <WetTag size={TagSize.Large} types={TagType.Primary}>
                        账户/昵称:
                        </WetTag>
                    </Col>
                    <Col span={14}>发个梵蒂冈</Col>
                    <Col span={4}>
                        <Button size="middle" type="dashed">编辑个人资料</Button>
                    </Col>
                    <Col span={2}>
                        <img src={vip}></img>
                    </Col>
                </Row>
                <Row>
                    <Col  span={4}>
                        <WetTag size={TagSize.Large} types={TagType.Warn}>个性签名:</WetTag>
                    </Col>
                    <Col span={20}> 丰富的割发代首个</Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <WetTag size={TagSize.Large} types={TagType.Info}>绑定邮箱:</WetTag>
                    </Col>
                    <Col span={20}>地方官发的广东省法规梵蒂冈</Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <WetTag size={TagSize.Large} types={TagType.Success}>当前职业:</WetTag>
                    </Col>
                    <Col span={20}>个单方事故梵蒂冈割发代首</Col>
                </Row>
            </div>
        </div>
    )
}
const Main:React.FC = ()=>{
    let [current_select,setCurrentSelect] = useState('1') 
    function callback(key:string|number) {
        setCurrentSelect(key as string)
    }
    return(
        <div>
            {UserMsg()}
            <div className="view_section">
                <h2 className="hd_title">当前选择:{crrentSelectTxt(current_select)}</h2>
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
                        <TabPane tab="文章查询" key="7">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Main