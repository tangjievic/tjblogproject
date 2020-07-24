import { cgiGet,cgiPost } from './index';

const getUserList = ()=>{
    return cgiGet('user/list',{})
}

export{
    getUserList
}