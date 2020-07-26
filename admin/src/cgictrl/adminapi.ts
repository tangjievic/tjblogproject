import { cgiGet,cgiPost } from './index';

const getAdminMsg = ()=>{
    return cgiGet('admin/msg',{});
}

const getAdminList = ()=>{
    return cgiGet('admin/list',{})
}

const addAdmin = (paramas:any)=>{
    return cgiPost('admin/add',paramas)
}

const deletAdmin = (params:any)=>{
    return cgiPost('admin/delete',params)
}

const adminLogin = (params:any) =>{
    return cgiPost('admin/login',params);
}

export {
    getAdminMsg,
    getAdminList,
    addAdmin,
    deletAdmin,
    adminLogin
}