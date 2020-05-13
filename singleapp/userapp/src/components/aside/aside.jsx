import React,{Component} from 'react';
import { Row, Col ,Input } from 'antd';
import Tool from '../../common/tool';

const { Search } = Input;

class TJAside extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let {asidemsg} = this.props
        return(
            <div className="tjaside">
                <Row>
                    <Col span={24}>
                        <div className="right_box">
                            <div className="select_title">文章查找:</div>
                            <div>
                                <Search
                                placeholder="查找值"
                                enterButton
                                onSearch={(value)=>{this.toSearchArt(value)}}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ul className="right_box">
                            <li className="cell_box">
                                <div className="cell_title">
                                    点赞文章数
                                </div>
                                <div className="cell_num">
                                    {asidemsg.zannum}
                                </div>
                            </li>
                            <li className="cell_box">
                                <div className="cell_title">
                                    文章收藏集
                                </div>
                                <div className="cell_num">
                                    {asidemsg.columnum}
                                </div>
                            </li>
                            <li className="cell_box">
                                <div className="cell_title">
                                    加入本站时间
                                </div>
                                <div className="cell_num">
                                    {Tool.formatDate(asidemsg.addtime)}
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="right_box">
                            <div className="select_title">开发手册</div>
                            <ul>
                                <li className="cell_wrap">
                                    <a href="/#">开发常见问题</a>
                                </li>
                                <li className="cell_wrap">
                                    <a href="/#">js工具手册</a>
                                </li>
                                <li className="cell_wrap">
                                    <a href="/#">css工具手册</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
    
    toSearchArt(value){
        console.log(this)
        this.props.Route.push({
            pathname:'/main/queryart/'+value
        })
    }
}

TJAside.defaultProps = {
    asidemsg:{
        addtime:'1588751387',
        columnum:1,
        zannum:1
    }
}

export default TJAside