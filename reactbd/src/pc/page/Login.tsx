import React, { Component } from 'react';
import { Row, Col, Divider, Form, Input, Button,message } from 'antd';
import img from './bg.png'
import SendCode from '../subassembly/sendcode/sendcode';
//import {getCode,userLogin,userSignIn,useReplacePassowrd} from '../../api/index'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class UserLogin extends Component {
    constructor(props:any){
        super(props)
        this.onFieldsChangeA = this.onFieldsChangeA.bind(this)
        this.onFinish = this.onFinish.bind(this)
        this.onFinishB = this.onFinishB.bind(this)
        this.onFinishC = this.onFinishC.bind(this)
    }
    state = {
        type:1,
        email:'',
    }
    render() {
        return (
            <div className="user_login">
                <div className="ball ball_1"></div>
                <div className="ball ball_2"></div>
                <div className="ball ball_3"></div>
                <div className="ball ball_4"></div>
                <div className="ball ball_5"></div>
                <div className="ball ball_6"></div>
                <div className="login_input">
                    <Row>
                        <Col span={10} className="imgbox">
                            <img src={img} alt="背景图片"></img>
                        </Col>
                        <Col span={14} className="input_form">
                            <div ref={(ref)=>{(this as any).input_1 = ref}} className="form_box1">
                                <div className="text">tj-blog,个人小站</div>
                                <Divider>用户登录</Divider>
                                <Form
                                    {...layout}
                                    name="basic_a"
                                    initialValues={{ remember: true }}
                                    onFinish={this.onFinish}
                                    onFinishFailed={(this as any).onFinishFailed}
                                    onFieldsChange={this.onFieldsChangeA}
                                >
                                    <Form.Item
                                        label="邮箱Email"
                                        name="email"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="密码"
                                        name="password"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item
                                        label="验证码"
                                        name="code"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Row>
                                            <Col span={14}><Input></Input></Col>
                                            <Col span={10} className="getcode">
                                                <SendCode onClick={()=>this.sendCode()}></SendCode>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Divider></Divider>
                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                                            登录
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <Row>
                                    <Col span={12}><Button type={'link'} onClick={()=>this.changeFlag(2)}>注册</Button></Col>
                                    <Col span={12} className="getcode"><Button type={'link'} onClick={()=>this.changeFlag(3)}>忘记密码？</Button></Col>
                                </Row>
                            </div>

                            <div ref={(ref)=>{(this as any).input_2 = ref}} className="form_box2">
                                <Divider>用户注册</Divider>
                                <Form
                                    {...layout}
                                    name="basic_b"
                                    initialValues={{ remember: true }}
                                    onFinish={this.onFinishB}
                                    onFieldsChange={this.onFieldsChangeA}
                                >
                                    <Form.Item
                                        label="用户账号"
                                        name="username"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        label="Email电子邮箱"
                                        name="email"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="密码"
                                        name="password"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item
                                        label="再次输入密码"
                                        name="re_password"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item
                                        label="验证码"
                                        name="code"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Row>
                                            <Col span={14}><Input></Input></Col>
                                            <Col span={10} className="getcode">
                                                <SendCode  onClick={()=>this.sendCode()}></SendCode>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item {...tailLayout}>
                                        <Row>
                                            <Col span={12}>
                                                <Button onClick={()=>this.changeFlag(1)} style={{width:'95%'}}>
                                                    返回登录
                                                </Button>
                                            </Col>
                                            <Col span={12}>
                                                <Button type="primary" htmlType="submit" style={{width:'100%'}}> 
                                                    注册
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                </Form>
                                {/* <Row>
                                    <Col span={12}><Button type={'link'} onClick={()=>this.changeFlag(1)}>返回到登录页</Button></Col>
                                </Row> */}
                            </div>

                            <div ref={(ref)=>{(this as any).input_3 = ref}} className="form_box2">
                                <Divider>找回密码</Divider>
                                <Form
                                    {...layout}
                                    name="basic_c"
                                    initialValues={{ remember: true }}
                                    onFinish={this.onFinishC}
                                    onFieldsChange={this.onFieldsChangeA}
                                >
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="新密码"
                                        name="password"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item
                                        label="再次输入密码"
                                        name="re_password"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item
                                        label="验证码"
                                        name="code"
                                        rules={[{ required: true, message: '此字段不能为空' }]}
                                    >
                                        <Row>
                                            <Col span={14}><Input></Input></Col>
                                            <Col span={10} className="getcode">
                                                <SendCode onClick={()=>this.sendCode()}></SendCode>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                                            密码重置
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <Row>
                                    <Col span={12}><Button type={'link'} onClick={()=>this.changeFlag(1)}>返回到登录页</Button></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
    //登录
    onFinish(values:any){
        console.log('Success:', values);
        // userLogin(values).then((res:any)=>{
        //     let data = res.data
        //     if(res.errorcode === 10001){
        //         window.localStorage.setItem('tjuser_token',data.token);
        //         window.localStorage.setItem('tjuser_username',data.username);
        //         message.success('登录成功')
        //         setTimeout(()=>{
        //             //(this as any).props.history.replace('/main/home');
        //         },500)
        //     }
        // })
        //this.props.history.push('/main/home');
    }
    onFieldsChangeA(values:any){
        if(values[0]){
            if(values[0].name[0]==='email'){
                this.setState({
                    email:values[0].value}
                )
            }
        }
    }
    //注册
    onFinishB(values:any){
        //if(va)
        if(values.re_password!==values.password){
            message.error('2次密码输入不一致，请确认密码')
            return
        }
        let temp:any = {}
        for(let i in values){
            if(i !== 're_password'){
                temp[i] = values[i]
            }
        }
        // userSignIn(temp).then(res=>{
        //     message.success('注册成功')
        //     setTimeout(()=>{
        //         this.changeFlag(1)
        //     },200)
        // })
    }   
    //找回密码
    onFinishC(values:any){
        if(values.re_password!==values.password){
            message.error('2次密码输入不一致，请确认密码')
            return
        }
        let temp:any = {}
        for(let i in values){
            if(i !== 're_password'){
                temp[i] = values[i]
            }
        }
        //请求cgi
        //console.log(temp)
        // useReplacePassowrd(temp).then(res=>{
        //     message.success('重置密码成功')
        //     setTimeout(()=>{
        //         this.changeFlag(1)
        //     },200)
        // })
    }

    async sendCode(){
        let result = null;
        let emreg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
        if(emreg.test(this.state.email)){
            // await getCode({
            //     email:this.state.email
            // }).then((res:any)=>{
            //     message.success('获取验证码成功，请登录邮箱查看验证码')
            //     result = true
            // }).catch(()=>{
            //     result = false
            // })
        }else{
            message.error('邮箱格式不正确,请确认后再次发送')
            result = false
        }
        return result
    }

    changeFlag(type:any){
        let dom_1 = (this as any)[`input_${type}`]
        let dom_2 = (this as any)[`input_${this.state.type}`]
        dom_1.classList.add('fade-in');
        dom_1.classList.remove('fade-out');
        dom_1.style.transform = 'rotateY(0deg)'
        dom_2.classList.add('fade-out');
        dom_2.classList.remove('fade-in');
        dom_2.style.transform = 'rotateY(90deg)'
        this.setState({
            type:type
        })
    }
}

export default UserLogin