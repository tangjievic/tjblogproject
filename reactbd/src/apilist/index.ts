import { cgiGet,cgiPost, } from './method';

//文章获取
const getCate = ()=>{
    return cgiGet('/user/getcate',{})
}
const getArtList = (params:any)=>{
    return cgiGet('/user/getart',params)
}
const getZanArt = (params:any)=>{
    return cgiGet('/user/zanart',params)
}

const getCollectArt = (params:any)=>{
    return cgiGet('/user/collectart',params)
}



//登录
const userLogin = (params:any)=>{
    return cgiPost('user/login',params);
}
//注册
const userSignIn = (params:any)=>{
    return cgiPost('user/create',params);
}
//重置密码
const useReplacePassowrd = (params:any) =>{
    return cgiPost('user/findpassword',params);
}

const getArtByKeywords = (params:any)=>{
    return cgiGet('/user/getartbykeywrods',params)
}

const getUserMsg = (params:any) =>{
    return cgiGet('/user/getmsg',params,false)
}

const getUerMsgPc = () =>{
    return cgiGet('/user/getmsg',{})
}

const getArt = (params:any) =>{
    return cgiGet('/user/artdetail',params,false)
}

const getNew = () =>{
    return cgiGet('/user/newart',{})
}

const getHotArt = (params:any)=>{
    return cgiGet('/user/hotart',params)
}

//获取验证码
const getCode = (params:any) =>{//获取邮箱验证码
    return cgiPost('verifycode/getcode',params);
}

export {
    getCate,
    getArtList,
    getArtByKeywords,
    getUserMsg,
    getUerMsgPc,
    getArt,
    getNew,
    userLogin,
    userSignIn,
    useReplacePassowrd,
    getCode,
    getZanArt,
    getCollectArt,
    getHotArt
}