import { cgiGet,cgiPost } from './index';
const getArtlist = ()=>{
    return cgiGet('artical/getlist',{})
}
const addArt = (params:any) =>{
    return cgiPost('artical/add',params)
}
const updateArt = (params:any) =>{
    return cgiPost('artical/edite',params)
}
export{
    getArtlist,
    addArt,
    updateArt
}