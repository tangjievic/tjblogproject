import React,{Component} from 'react';
import { Row, Col ,Input } from 'antd';

const { Search } = Input;

class TJAside extends Component {
    render(){
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
                                onSearch={value => console.log(value)}
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
                                    点赞数
                                </div>
                                <div className="cell_num">
                                    0
                                </div>
                            </li>
                            <li className="cell_box">
                                <div className="cell_title">
                                    <a>收藏集</a>
                                </div>
                                <div className="cell_num">
                                    0
                                </div>
                            </li>
                            <li className="cell_box">
                                <div className="cell_title">
                                    加入本站时间
                                </div>
                                <div className="cell_num">
                                    2018-12-28
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
                                    <a>js工具手册</a>
                                </li>
                                <li className="cell_wrap">
                                    <a>css工具手册</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TJAside