import * as constants from './action_types'
import {getHomeData} from '../api/index'
//获取首页数据
export const getDataHomeAction = ()=>{
    //type:constants.INIT_HOME_DATA
    return (dispatch)=>{
        getHomeData()
    }
}