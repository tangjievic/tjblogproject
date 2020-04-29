import {postApi,getApi} from './apimethods'

const getHomeData = (params) =>{//获取用户数据
    return getApi('admin/login',params,1);
}
const getCode = (params) =>{//获取邮箱验证码
    return postApi('verifycode/getcode',params,1);
}
const userLogin = (params)=>{
    return postApi('user/login',params,1);
}
const userSignIn = (params)=>{
    return postApi('user/create',params,1);
}
const useReplacePassowrd = (params) =>{
    return postApi('user/findpassword',params,1);
}

export {
    getHomeData,
    getCode,
    userLogin,
    userSignIn,
    useReplacePassowrd
}