import {postApi,getApi,LINKURL} from './apimethods'

// const getHomeData = (params) =>{//获取用户数据
//     return getApi('admin/login',params,1);
// }
const getUserMsg = ()=>{
    return getApi('/user/getmsg',{},1,true)
}

const toZan = (params)=>{
    return postApi('/use/artzan',params,1)
}
const toCollect = (params)=>{
    return postApi('/use/artcollect',params,1)
}

const ArtComment = (params)=>{
    return postApi('/art/comment',params,1)
}

export{
    getUserMsg,
    toZan,
    toCollect,
    ArtComment,
    LINKURL
}