import React, { Component } from 'react';
import { Menu, Row, Col, Dropdown, Button, Badge, Tag,message } from 'antd';
import { NotificationOutlined } from '@ant-design/icons'
import TJAside from '../aside/aside'
import {LINKURL} from '../../api/apimethods'

const { SubMenu } = Menu;
class TJHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'userindex',
    };
    this.menu = (
      <Menu>
        <Menu.Item>
          <a href="/#!" rel="noopener noreferrer" onClick={this.supVip.bind(this)}>
            申请本站vip
          </a>
        </Menu.Item>
        <hr></hr>
        <Menu.Item>
          <a href="/#!" rel="noopener noreferrer" onClick={this.loginOut.bind(this)}>
            登出
          </a>
        </Menu.Item>
      </Menu>
    );
  }

  handleClick = e => {
    console.log('click ', e,process.env.NODE_ENV);
    this.setState({
      current: e.key,
    });
    if(e.key === 'userindex'){
      return
    }
    window.open(`${LINKURL}/artlist.html?cid=${e.key}`,'_self')
  };


  //
  render() {
    let {userData,notice_num,cateMsg} = this.props
    return (
      <Row className="tj_header">
        <Col span={4}>
          <a className="logo_link" href={LINKURL}>TANGJIE-BLOG</a>
        </Col>
        <Col span={14}>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="userindex">
              用户中心
            </Menu.Item>
            {
              cateMsg.map((item)=>{
                if(item.children.length>0){
                  return(<SubMenu title={<>{item.catename}</>} key={`${item.id}`}>
                    {
                      item.children.map((its)=>{
                        return(<Menu.Item key={`${its.id}`}>{its.catename}</Menu.Item>)
                      })
                    }
                  </SubMenu>)
                }else{
                  return(
                    <Menu.Item key={`${item.id}`}>
                      {item.catename}
                    </Menu.Item>
                  )
                }
              })
            }
          </Menu>
        </Col>
        <Col span={1}>
          <Badge count={notice_num} className="user_notice-bage">
            <a className="user_notice-link" href="/#!"><NotificationOutlined></NotificationOutlined></a>
          </Badge>
        </Col>
        <Col span={1}>
          {
            (()=>{
              if(Number(userData.level) === 0){
                return(
                  <div className="user_class-tag"><Tag color="#2db7f5">普通用户</Tag></div>
                )
              }else if(Number(userData.level) === 1){
                return(
                  <div className="user_class-tag"><Tag color="#f50">VIP用户</Tag></div>
                )
              }else{
                return(
                  <div className="user_class-tag"><Tag color="#108ee9">特权用户</Tag></div>
                )
              }
            })()
          }
        </Col>
        <Col span={4} className="user_msg-box">
          <Dropdown overlay={this.menu} placement="bottomLeft">
            <Button className="user_front">用户名（账户）{userData.nickname?userData.nickname:userData.username}</Button>
          </Dropdown>
        </Col>
        <TJAside 
        Route={this.props.Route}
        asidemsg={{
          addtime:userData.create_time,
          columnum:userData.collect_num,
          zannum:userData.zan_num,
        }}></TJAside>
      </Row>
    )
  }

  //登出函数
  loginOut(event){
    event.preventDefault();
    window.localStorage.setItem('tjuser_token','');
    window.localStorage.setItem('tjuser_username','');
    message.success('退出登录成功')
    setTimeout(()=>{
        this.props.Route.replace('/login');
    },500)
  }
  //申请vip函数
  supVip(event){
    event.preventDefault();
    message.warning('功能暂未开放')
  }
}

TJHeader.defaultProps = {
  userData:{},
  notice_num:0,
}

export default TJHeader