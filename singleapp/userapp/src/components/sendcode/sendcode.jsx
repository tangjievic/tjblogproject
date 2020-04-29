import React,{Component} from 'react';
import { Button} from 'antd';

class SendCode extends Component{

    constructor(props){
        super(props);
        this.state={
            send_time:60,
            is_send:false
        }
    }
    render(){
        if(this.state.is_send){
            return(<Button disabled={true}>{this.state.send_time}s后获取</Button>)
        }else{
            return(
            <Button onClick={()=>this.sendCodeEvent()}>{this.props.btn_title}</Button>
            )
        }
    }

    sendCodeEvent(){
        const { onClick } = this.props;
        console.log(this.props)
        let is_send = null
        if (onClick) {
            is_send = onClick();
        }
        this.setState({
            is_send:is_send
        })
        if(this.state.is_send){
            let time = setInterval(() => {
                let send_time = this.state.send_time
                send_time --;
                this.setState({
                    send_time
                })
                if(send_time == 0){
                    this.setState({
                        is_send:false,
                        send_time:60
                    })
                    clearInterval(time)
                }
            }, 1000);
        }
    }
}
SendCode.defaultProps ={
    btn_title:'Email发送',
}
export default SendCode