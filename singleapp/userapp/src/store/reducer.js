import * as constants from './action_types'

//存放数据
const default_sate = {
    homeData:{
        username:'tangjie'
    }
}

export default (state = default_sate,actions)=>{
    //第一种方式，利用json方法实现state的深拷贝，从而实现状态的不可逆
    if(actions.type === constants.INIT_HOME_DATA){
        const newState = JSON.parse(JSON.stringify(state));
        newState.homeData = state.homeData;
        return newState;
    }
    return state;
}