import * as constants from './action_types'
import {getUserMsg} from '../api/index'
//获取首页数据
let getUserMsgAction = ()=>{
    //type:constants.INIT_HOME_DATA
    return (dispatch)=>{
        getUserMsg().then(res=>{
            let userData = res.data;
            //console.log(userData)
            dispatch({
                type:constants.INIT_USER_DATA,
                userData
            })
        }).catch(error=>{
            console.log(error)
        })

    }
}

export {
    getUserMsgAction
}