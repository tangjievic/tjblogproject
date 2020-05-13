import * as constants from './action_types'
import {getUserMsg,getCate} from '../api/index'
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
let getCateMsg = ()=>{
    return (dispatch)=>{
        getCate().then(res=>{
            let cateMsg = res.data;
            dispatch({
                type:constants.INIT_CATE_MSG,
                cateMsg
            })
        })
    }
}

let setQeryArtKeywords = (keywords)=>{
    return (dispatch)=>{
        let qeryKeywords = keywords;
        dispatch({
            type:constants.SET_QUERY_KEYWORDS,
            qeryKeywords
        })
    }
}
export {
    getUserMsgAction,
    getCateMsg,
    setQeryArtKeywords
}