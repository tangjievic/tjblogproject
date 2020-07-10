import React,{useState} from 'react';
import './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import HeaderLayOut from '../HeaderLayOut';
import routers from '../../router/index';
// import {
//     FileOutlined
//   } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
interface MainLayOutProps {

}
let handleClick = (item:any,props:any)=>{
    console.log(props,'xxxx')
    props.history.push({
        pathname:item.path,
        state:{},
    })
}
const RenderMeun = (array:any,props:any)=>{
    let temp_array:any = []
    array.forEach((item:any,key:number)=>{
        let IconNode = item.icon?item.icon:StopOutlined
        if(item.redirect){
            return
        }else{
            temp_array.push(
                (<Menu.Item 
                key={`${key}`} 
                onClick={()=>handleClick(item,props)}
                icon={<IconNode/>}> {item.title} </Menu.Item>)
            )
        }
    })
    return temp_array
}

const MainLayout:React.FC<MainLayOutProps> = (props) =>{
    const {
        children,
        ...other
    } = props;
    let router_menu:any = routers[1].routers;
    let [collapsed,setCollapsed] = useState(false);
    let onCollapse = (collapsed:boolean) => {
        //console.log(collapsed);
        setCollapsed(collapsed);
        //this.setState({ collapsed });
    };
    //console.log(router_menu)
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
            { RenderMeun(router_menu,props) }
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