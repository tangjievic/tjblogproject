import React from 'react';
import './index.less';

const WelCome:React.FC = (props)=>{
    const {
        ...other
    } = props

    return(
        <div>欢迎</div>
    )
}

export default WelCome;