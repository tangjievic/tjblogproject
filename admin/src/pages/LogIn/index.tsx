import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button,message } from 'antd';
import './index.less';
import { bindActionCreators } from 'redux';
import adminLogin from '../../actions/loginActions';
import * as constants from '../../constants/index'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
interface LoginProps {
    a?: string;
    children: React.ReactNode;
    adminLogin?:any;
}
type LogInPage = React.DOMAttributes<HTMLElement> & LoginProps;

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
const LogIn: React.FC<LogInPage> = (props:any) => {
    const {
        adminLogin,
        ...restProps
    } = props
    const onFinish = (values: any) => {
        props.history.replace('/main')

        // if(values.password !== values.rpassword){
        //     message.error('两次密码不一致,请核实在登录');
        //     return;
        // }
        // adminLogin().adminLogin({
        //     username:values.username,
        //     password:values.password
        // }).then((res:any)=>{
            
        //     // let adminData = res.data;
        //     // adminLogin().dispatch({
        //     //     type:constants.AUTH_DATA,
        //     //     adminData
        //     // })
        // })
        
    };
    return (
        <div className="loginpage">
            <div className="login_inputbox">
                <div>
                    <h2 className="hd">TJ-AMDIN,打造属于你自己的个人网站</h2>
                    <div className="form_box">
                        <Form
                            className="form_inner"
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="登录账户"
                                name="username"
                                rules={[{ required: true, message: '请输入用户名!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="登录密码"
                                name="password"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="重复输入"
                                name="rpassword"
                                rules={[{ required: true, message: '请重复输入密码!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    用户登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
            <footer>
                <p className="footer_text">TJ-AMDIN,基于React和Ant，thinkPHP6打造小型博客管理系统</p>
            </footer>
        </div>
    )
}
//分发行为
const mapAtion  = (dispatch:any) =>{
    return {
        adminLogin:bindActionCreators(adminLogin,dispatch)
    }
}

export default connect(null,mapAtion)(LogIn)