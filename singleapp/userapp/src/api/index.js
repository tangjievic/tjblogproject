import {postApi,getApi} from './apimethods'

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
const getUserMsg = ()=>{
    return getApi('/user/getmsg',{},1)
}
const getCate = ()=>{
    return getApi('/cate/usergetcate',{},1);
}
export {
    getCode,
    userLogin,
    userSignIn,
    useReplacePassowrd,
    getUserMsg,
    getCate
}