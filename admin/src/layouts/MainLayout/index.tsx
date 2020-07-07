import React,{useState} from 'react';
import './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderLayOut from '../HeaderLayOut';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
interface MainLayOutProps {

}

const MainLayout:React.FC<MainLayOutProps> = (props) =>{
    const {
        children,
        ...other
    } = props;
    let [collapsed,setCollapsed] = useState(false);
    let onCollapse = (collapsed:boolean) => {
        //console.log(collapsed);
        setCollapsed(collapsed);
        //this.setState({ collapsed });
    };
    return(
        <Layout style={{ minHeight: '100vh' }}>
        <Sider
        style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }} 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(collapsed)=>onCollapse(collapsed)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout"  style={{ marginLeft: 200 }}>
          <Header className="site-layout-header" style={{ padding: 0 }}>
            <HeaderLayOut></HeaderLayOut>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>tangjie-blog admin</Footer>
        </Layout>
      </Layout>
    )
}

export default MainLayout