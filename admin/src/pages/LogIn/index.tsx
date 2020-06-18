import React from 'react';
import { type } from 'os';
import { DividerProps } from 'antd/lib/divider';
import './index.less';
interface LoginProps{
   a?:string;
   children:React.ReactNode;
}
type LogInPage = React.DOMAttributes<HTMLElement> & LoginProps;
const LogIn:React.FC<LogInPage> = (props) =>{
    const {
        ...restProps
    } = props
    return (
        <div className="loginpage">

        </div>
    )
}

export default LogIn