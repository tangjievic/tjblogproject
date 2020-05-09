import * as constants from './action_types'

//存放数据
const default_state = {
    userData:{},
    cateMsg:[]
}

export default (state = default_state,actions)=>{
    //第一种方式，利用json方法实现state的深拷贝，从而实现状态的不可逆
    //console.log(actions.type,constants.INIT_USER_DATA)
    if(actions.type === constants.INIT_USER_DATA){
        const newState = JSON.parse(JSON.stringify(state));
        //console.log(actions.type,constants.INIT_USER_DATA,state)
        newState.userData = actions.userData;
        return newState;
    }
    if(actions.type === constants.INIT_CATE_MSG){
        const newState = JSON.parse(JSON.stringify(state));
        newState.cateMsg = actions.cateMsg;
        return newState
    }
    return state;
}