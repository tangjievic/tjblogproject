import React, { Component } from 'react';
import { Row, Col ,Divider,Button,Input,message } from 'antd';
import SendCode from '../.././../components/sendcode/sendcode'
import {getCode,userMsgEdite} from '../../../api/index'
import { connect } from 'react-redux'
import { getUserMsgAction} from '../../../store/action_creator'

const { TextArea } = Input;
class UserEdite extends Component{
    constructor(props){
        super(props)
        this.state = {
            userData:{},
            edite_msg : {
                nickname:"",
                email:"",
                profession:"",
                signature:'',
                code:''
            },
            is_edite:{
                nickname:true,
                email:true,
                profession:true,
                signature:true
            }
        }
    }

    render(){
        //console.log(this.props.userData)
        let {edite_msg,is_edite} = this.state
        return(
            <Row className="useredite_box">
                <Col span={24}>
                    <Row>
                        <h2>个人资料</h2>
                    </Row>
                    <Divider></Divider>
                    <Row className="list">
                        <Col span={6}>
                            昵称：
                        </Col>
                        <Col span={12}>
                            <Input onChange={(e)=>{this.setFiled(e)}} 
                            data-filed="nickname" 
                            disabled={is_edite.nickname} 
                            value={edite_msg.nickname}></Input>
                        </Col>
                        <Col span={6} style={{textAlign:'right'}}>
                            <Button className="btn" onClick={()=>this.toEdit('nickname')}>编辑</Button>
                            <Button className="btn" type="primary"
                            onClick={()=>this.submitData('nickname')} 
                            disabled={is_edite.nickname} >提交</Button>
                        </Col>
                    </Row>
                    <Row className="list">
                        <Col span={6}>
                            职业：
                        </Col>
                        <Col span={12}>
                            <Input onChange={(e)=>{this.setFiled(e)}} 
                            data-filed="profession"
                            disabled={is_edite.profession} 
                            value={edite_msg.profession}></Input>
                        </Col>
                        <Col span={6} style={{textAlign:'right'}}>
                            <Button className="btn" onClick={()=>this.toEdit('profession')}>编辑</Button>
                            <Button className="btn" type="primary"
                            onClick={()=>this.submitData('profession')}
                            disabled={is_edite.profession} >提交</Button>
                        </Col>
                    </Row>
                    <Row className="list">
                        <Col span={6}>
                            绑定邮箱:
                        </Col>
                        <Col span={8}>
                            <Row>
                                <Col span={24}>
                                    <Input
                                    onChange={(e)=>{this.setFiled(e)}} 
                                    data-filed="email"
                                    disabled={
                                        is_edite.email
                                    } 
                                    value={edite_msg.email}></Input>
                                </Col>
                            </Row>
                            <Row style={{marginTop:'5px'}}>
                                <Col span={6}>验证码:</Col>
                                <Col span={18}>
                                    <Input
                                    onChange={(e)=>{this.setFiled(e)}} 
                                    data-filed="code"
                                    disabled={
                                        is_edite.email
                                    } 
                                    ></Input>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={4} style={{textAlign:'right'}}>
                            <SendCode onClick={()=>this.sendCode()} disabled={
                                        is_edite.email
                                    }></SendCode>
                        </Col>
                        <Col span={6} style={{textAlign:'right'}}>
                            <Button className="btn" onClick={()=>this.toEdit('email')}>编辑</Button>
                            <Button className="btn" type="primary" 
                            onClick={()=>this.submitData('email')}
                            disabled={is_edite.email} >提交</Button>
                        </Col>
                    </Row>
                    <Row className="list">
                        <Col span={6}>
                            签名:
                        </Col>
                        <Col span={12}>
                            <TextArea rowzs="2"
                            data-filed="signature"
                            disabled={is_edite.signature}
                            onChange={(e)=>{this.setFiled(e)}}        
                            value={edite_msg.signature}></TextArea >
                        </Col>
                        <Col span={6} style={{textAlign:'right'}}>
                            <Button className="btn" onClick={()=>this.toEdit('signature')}>编辑</Button>
                            <Button className="btn" type="primary" 
                             onClick={()=>this.submitData('signature')}
                            disabled={is_edite.signature} >提交</Button>
                        </Col>
                    </Row>
                    <Row className="btn_box">
                        <Col style={{textAlign:'left'}} span={12}>
                            <Button className="btn" type="link" onClick={()=>this.goBack()}>返回</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }

    static getDerivedStateFromProps  (props, state){
        if(props.userData !== state.userData){
            let edite_msg = {}
            for(let i in state.edite_msg){
                edite_msg[i] = props.userData[i]
            }
            edite_msg.code = ''
            return {
                userData:props.userData,
                edite_msg,
            }
        }
        return null
    }
    async sendCode(){
        let result = null;
        let emreg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
        if(emreg.test(this.state.edite_msg.email)){
            await getCode({
                email:this.state.edite_msg.email
            }).then(res=>{
                message.success('获取验证码成功，请登录邮箱查看验证码')
                result = true
            }).catch(()=>{
                result = false
            })
        }else{
            message.error('邮箱格式不正确,请确认后再次发送')
            result = false
        }
        return result
    }

    setFiled(e){
        //console.log(e)
        let edite_msg = this.state.edite_msg
        edite_msg[e.target.dataset.filed] = e.target.value
        this.setState({
            edite_msg
        })
    }

    goBack(){
        this.props.history.go(-1)
    }

    //点击编辑
    toEdit(filed){
        let is_edite = this.state.is_edite
        is_edite[filed] = false
        this.setState({
            is_edite
        })
        //console.log(this.state.is_edite)
    }

    submitData(filed){
        // let temp = {};
        // temp[filed] = this.state.edite_msg[filed]
        userMsgEdite({
            filed:filed,
            value:this.state.edite_msg[filed],
            code:this.state.edite_msg.code
        }).then((res)=>{
            //console.log(res)
            message.success(res.message)
            let is_edite = this.state.is_edite
            is_edite[filed] = true
            this.props.reqUserData()
            this.setState({
                is_edite
            })
        })
    }
}

const mapState = (state)=>{
    return {
        userData:state.userData,
    }
}

const mapAtion = (dispatch) =>{
    return {
        reqUserData(){
            const action = getUserMsgAction()
            dispatch(action)
        }
    }
}

export default connect(mapState,mapAtion)(UserEdite)