import {getApi,postApi} from './method.js'

/* 登录相关api */
const managerLogin = (params) =>{
    return postApi('admin/login',params,0);
}
/* 管理员管理 */
const addAdmin = (params) =>{
    return postApi('v1/admin/add',params);
}
const getAdmin = ()=>{
    return getApi('admin/getlist',{},0)
}
const getAdminById = (params)=>{
    return getApi('v1/admin/getadminbyid',params)
}
const updataAdmin = (params)=>{
    return postApi('v1/updataadmin',params)
}
/* 文章相关 */
const getCate = (params={})=>{
    return getApi('cate/getlist',params,0);
}
const addCate = (params) =>{
    return postApi('cate/add',params,0)
}
const updateCate  = (params) =>{
    return postApi('cate/update',params,0)
}
const addTags = (params)=>{
    return postApi('tage/add',params,0)
}
const getTagsList = ()=>{
    return getApi('tage/getlist',{},0)
}
const updataTags = (params)=>{
    return postApi('tage/updata',params,0)
}
const addArt = (params) =>{
    return postApi('artical/add',params)
}
const getArtlist = ()=>{
    return getApi('artical/getlist',{},0)
}
const updateArt = (params) =>{
    return postApi('artical/edite',params,0)
}
export{
    managerLogin,
    getAdmin,
    getCate,
    addCate,
    updateCate,
    addTags,
    getTagsList,
    updataTags,
    addArt,
    getArtlist,
    updateArt
}