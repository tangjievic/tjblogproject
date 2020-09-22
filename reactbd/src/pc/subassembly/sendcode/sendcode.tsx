import React,{Component} from 'react';
import { Button} from 'antd';
import { inflate } from 'zlib';
let time:any = null//全局定时器变量
interface SendCodeProps {
    onClick:any
}
class SendCode extends Component<SendCodeProps>{
    constructor(props:any){
        super(props);
        this.state={
            send_time:60,
            is_send:false
        }
    }
    render(){
        if((this.state as any).is_send){
            return(<Button disabled={true}>{(this as any).state.send_time}s后获取</Button>)
        }else{
            return(
            <Button onClick={()=>this.sendCodeEvent()} disabled={(this as any).props.disabled}>{(this as any).props.btn_title}</Button>
            )
        }
    }

    sendCodeEvent(){
        let onClick:any = (this as any).props.onClick;
        let is_send = null
        if (onClick) {
            onClick().then((res:any)=>{
                is_send = res
                this.setState({
                    is_send:is_send
                })
                if(is_send){
                    time = setInterval(() => {
                        let send_time = (this as any).state.send_time
                        send_time --;
                        this.setState({
                            send_time
                        })
                        if(send_time === 0){
                            this.setState({
                                is_send:false,
                                send_time:60
                            })
                            clearInterval(time)
                        }
                    }, 1000);
                }
            })
        }
    }

    componentWillUnmount(){
        clearInterval(time)
    }
}
(SendCode as any).defaultProps ={
    btn_title:'Email发送',
    disabled:false
}
export default SendCode