import { cgiGet,cgiPost } from './index';
const getCate = (params={})=>{
    return cgiGet('cate/getlist',params);
}
const getTags = ()=>{
    return cgiGet('tage/getlist',{})
}
const updateCate  = (params:any) =>{
    return cgiPost('cate/update',params)
}
const addCate = (params:any) =>{
    return cgiPost('cate/add',params)
}
const addTags = (params:any)=>{
    return cgiPost('tage/add',params)
}
const updataTags = (params:any)=>{
    return cgiPost('tage/updata',params)
}
export{
    getCate,
    getTags,
    updateCate,
    addCate,
    addTags,
    updataTags
}