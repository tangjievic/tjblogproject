import * as constants from './actiontypes'
import { getUserMsg,getCate } from '../apilist/index'

let getUserMsgAction = () => {
    return (dispatch:any) =>{
        getUserMsg({}).then((res:any)=>{
            let userData = res.data;
            dispatch({
                type:constants.INIT_USER_DATA,
                userData
            })
        }).catch(error =>{
            //console.log(error);
            let userData = {};
            dispatch({
                type:constants.INIT_USER_DATA,
                userData
            })
        })
    }
}

let getCateMsgAction = ()=>{
    return (dispatch:any)=>{
        getCate().then( (res:any)=>{
            let cateMsg = res.data;
            dispatch({
                type:constants.INIT_CATE_MSG,
                cateMsg
            })
        })
    }
}

export {
    getUserMsgAction,
    getCateMsgAction
}