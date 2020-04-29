import React,{Component} from 'react';
import { Menu,Row, Col,Dropdown, Button,Badge,Tag } from 'antd';
import {NotificationOutlined } from '@ant-design/icons'
import TJAside from '../aside/aside'
const { SubMenu } = Menu;

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          申请本站vip
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          设置
        </a>
      </Menu.Item>
      <hr></hr>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          登出
        </a>
      </Menu.Item>
    </Menu>
);

class TJHeader extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    };
    

    render(){
        return(
            <Row className="tj_header">
                <Col span={4}>
                    <a className="logo_link" href="https://www.tangjietop.cn/">TANGJIE-BLOG</a>
                </Col>
                <Col span={14}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">
                        首页
                        </Menu.Item>
                        <Menu.Item key="app">
                        栏目一
                        </Menu.Item>
                        <SubMenu title={<>栏目二</>}>
                            <Menu.Item key="setting:1">子栏目一</Menu.Item>
                            <Menu.Item key="setting:2">子栏目二</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
                <Col span={1}>
                    <Badge count={5} className="user_notice-bage">
                        <a className="user_notice-link"><NotificationOutlined></NotificationOutlined></a>
                    </Badge>
                </Col>
                <Col span={1}>
                    <div className="user_class-tag"><Tag color="#2db7f5">VIP</Tag></div>
                </Col>
                <Col span={4} className="user_msg-box">
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <Button className="user_front">用户名（账户）465456465465</Button>
                    </Dropdown>
                </Col>
                <TJAside></TJAside>
            </Row>
        )
    }
}

export default TJHeader