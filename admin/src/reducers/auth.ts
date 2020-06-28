import { AUTH_DATA } from '../constants/index'
import cloneDeep from 'lodash/cloneDeep';
interface DefaultState{
    username:string
    token:string
}
const defaultValue:DefaultState = {
    username:'',
    token:''
}

export default function auth(state = defaultValue,action:any){
    switch(action.type){
        case AUTH_DATA:
            let newState:any = cloneDeep(state);
            newState = action.adminData
            return newState;
        default:
            return state
    }
}