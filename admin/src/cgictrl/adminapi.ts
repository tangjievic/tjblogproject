import { cgiGet,cgiPost } from './index';

const getAdminMsg = ()=>{
    return cgiGet('admin/msg',{});
}

const getAdminList = ()=>{
    return cgiGet('admin/list',{})
}

export {
    getAdminMsg,
    getAdminList
}