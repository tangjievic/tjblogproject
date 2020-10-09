import React,{useState,useEffect} from 'react';
import { Row, Col, Tabs, Empty ,Input } from 'antd';
import Bubbline from '../subassembly/bubbleline/Bubbleline';
import WetTag,{TagSize,TagType}from '../../components/tag/tag';
import Artlist from '../subassembly/Aartlist';
import { connect } from 'react-redux';
import novip from './novip.png';
import vip from './vip.png';
import veidoData from '../../tool/veidolist';
import { getZanArt,getArtList,getHotArt,getCollectArt, getArtByKeywords} from '../../apilist';
interface MaibProps{
    userData:any;
}
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
const { Search } = Input;
const Main:React.FC<MaibProps> = (props)=>{
    let { userData } = props;
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
                        <Col span={14}>{(userData as any).nickname?(userData as any).nickname:(userData as any).email}</Col>
                        <Col span={4}>
                            {/* <Button size="middle" type="dashed">编辑个人资料</Button> */}
                        </Col>
                        <Col span={2}>
                            <img alt="vipornovip" src={(userData as any).level===0?novip:vip}></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col  span={4}>
                            <WetTag size={TagSize.Large} types={TagType.Warn}>个性签名:</WetTag>
                        </Col>
                        <Col span={20}> {(userData as any).signature}</Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <WetTag size={TagSize.Large} types={TagType.Info}>绑定邮箱:</WetTag>
                        </Col>
                        <Col span={20}>{(userData as any).email}</Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <WetTag size={TagSize.Large} types={TagType.Success}>当前职业:</WetTag>
                        </Col>
                        <Col span={20}>{(userData as any).profession}</Col>
                    </Row>
                </div>
            </div>
        )
    }
    let [artlist,setArtlist] = useState([]);
    let [total,setTotal] = useState(0);
    let [pagenum,setPage] = useState(0);
    let [keywords,setKeywords] = useState('');
    let [tabkeys,setTabKeys] = useState(0);
    useEffect(()=>{
        getArtList({
            "id":'',
            "page_count": 1,
            "page_size": 10,
        }).then((res:any)=>{
            setArtlist(res.data.data);
            setTotal(res.data.total);
            setPage(res.data.current_page);
        })
    },[])
    let onChagePage = (current:number)=>{
        let callFunc : (prams:any)=>{};
        switch(tabkeys){
            case 1:
                callFunc = getArtList;
                break;
            case 2:
                callFunc = getHotArt;
                break;
            case 3:
                callFunc = getZanArt;
                break;
            case 4:
                callFunc = getCollectArt;
                break
            default:
                callFunc = ()=>{return '0'};
                break;
        }
        return  callFunc({
            "id":'',
            "page_count": current,
            "page_size": 10,
        })
    }
    let onChagePageKey = (current:number)=>{
        return  getArtByKeywords({
            "page_count": current,
            "page_size": 10,
            keywords
        })
    }
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
    let [current_select,setCurrentSelect] = useState('1') 
    function callback(key:string|number) {
        setPage(1);
        setArtlist([]);
        setTabKeys(Number(key))
        switch(Number(key)){
            case 1:
                getArtList({
                    "id":'',
                    "page_count": pagenum,
                    "page_size": 10,
                }).then((res:any)=>{
                    setArtlist(res.data.data);
                    setTotal(res.data.total);
                    setPage(res.data.current_page);
                });
                break;
            case 2:
                getHotArt({
                    "id":'',
                    "page_count": pagenum,
                    "page_size": 10,
                }).then((res:any)=>{
                    setArtlist(res.data.data);
                    setTotal(res.data.total);
                    setPage(res.data.current_page);
                });
                break;
            case 3:
                getZanArt({
                    "id":'',
                    "page_count": pagenum,
                    "page_size": 10,
                }).then((res:any)=>{
                    setArtlist(res.data.data);
                    setTotal(res.data.total);
                    setPage(res.data.current_page);
                });
                break;
            case 4:
                getCollectArt({
                    "id":'',
                    "page_count": pagenum,
                    "page_size": 10,
                }).then((res:any)=>{
                    setArtlist(res.data.data);
                    setTotal(res.data.total);
                    setPage(res.data.current_page);
                });
                break
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            default:
                break;
        }
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
                            <Artlist  artlist={artlist}  total={total} onChagePage={onChagePage}></Artlist>
                        </TabPane>
                        <TabPane tab="热门文章" key="2">
                            <Artlist  artlist={artlist}  total={total} onChagePage={onChagePage}></Artlist>
                        </TabPane>
                        <TabPane tab="点赞文章" key="3">
                            <Artlist  artlist={artlist}  total={total} onChagePage={onChagePage}></Artlist>
                        </TabPane>
                        <TabPane tab="收集文章" key="4">
                            <Artlist  artlist={artlist}  total={total} onChagePage={onChagePage}></Artlist>
                        </TabPane>
                        <TabPane tab="vip专享" key="5">
                            <Artlist  artlist={artlist}  total={total} onChagePage={onChagePage}></Artlist>
                        </TabPane>
                        <TabPane tab="视频资源" key="6">
                            {/* <Empty description="暂无数据"></Empty> */}
                            <div>
                                <div>微信小程序组件开发</div>
                                <ul>
                                    {veidoData.weappMoel.map((item:any,index:number)=>{
                                        return (
                                            <li key={index}>
                                                <a target="_blank" href={item.url} rel="noopener noreferrer">{item.id} * {item.name}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabPane>
                        <TabPane tab="文章查询" key="7">
                            <Search
                            placeholder="请输入关键字"
                            onSearch={value => onSearch(value)}
                            style={{ width: '100%' }}
                            />
                            <Artlist  artlist={artlist}  total={total} onChagePage={onChagePageKey}></Artlist>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
const mapState = (state:any) =>{
    return {
        userData:state.userData
    }
 }

export default connect(mapState,)(Main)