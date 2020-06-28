import {postApi,getApi} from './method'
const adminLogin = (params:any)=>{
    return postApi('admin/login',params);
}

const getAminMsg = (params:any)=>{
    return getApi('admin/getinfo',params)
}

export {
    adminLogin,
    getAminMsg
}