import React,{useState} from 'react';
import { Menu,Dropdown, Button } from 'antd';
import './index.less';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          系统设置
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          退出登录
        </a>
      </Menu.Item>
    </Menu>
);
const HeaderLayOut:React.FC = (props)=>{
    const {
        ...other
    } = props



    return(
        <div className="headerlayout">
            <div className="left"></div>
            <div className="right">
                <div>
                    
                </div>
                <div className="user_event">
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button>username</Button>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default HeaderLayOut