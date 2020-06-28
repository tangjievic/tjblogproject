import axios from 'axios'

import {message} from 'antd'
let SEVERURL = '';
let LINKURL = '';
if(process.env.NODE_ENV === 'development'){
    SEVERURL = 'http://www.tangjietop.cn/index.php'
    LINKURL = 'http://www.tangjietop.cn'
}else{
    //SEVERURL = 'http://www.tjcms.com/index.php'
    SEVERURL = 'https://www.tangjietop.cn/index.php'
    LINKURL = 'https://www.tangjietop.cn'

    // SEVERURL = 'http://www.tjcms.com/index.php'
    // LINKURL = 'http://www.tjcms.com'
}
/* 
axios封装 
@ type 指的是管理端发的请求还是用户端发的请求 0管理端，1用户端
*/
let getApi = (api:string,params:any,type = 0) =>{
    let header:any = {
        'Content-Type':'application/json',
        "Access-Control-Allow-Headers":'*'
    },token,username;
    if(Number(type) === 0){
        token = localStorage.getItem("tjblog_token");
        username = localStorage.getItem("tjblog_username");
    }else{
        token =localStorage.getItem('tjuser_token');
        username = localStorage.getItem('tjuser_username');
    }
    if(!token){
        token = '';
    }
    if(!username){
        username ='';
    }
    header.token = token;
    header.username = username;
    return new Promise((resolve, reject)=>{
        axios({
            method:'get',
            url:`${SEVERURL}/${api}`,
            params:params,
            headers:header
        }).then(
            (res:any)=>{
                resolve(res.data)
            }
        ).catch(
            (error:any)=>{
                let data = error.response.data;
                if(Number(error.response.status) === 401 && Number(data.code) === 10002){
                    setTimeout(()=>{
                        window.location.href = `http://localhost:3000/#/login`
                    })
                }
                message.error(data.message)
                reject(data)
            }
        )
    })
}

let postApi = (api:string,params:any,type = 0,upload=false) => {
    let header:any = null,token,username,pm = params;
    if(Number(type) === 0 ){
        token = localStorage.getItem("tjblog_token");
        username = localStorage.getItem("tjblog_username");
    }else{
        token =localStorage.getItem('tjuser_token');
        username = localStorage.getItem('tjuser_username');
    }
    if(upload){
        header = {'Content-Type':'multipart/form-data'}
    }else{
        header = {'Content-Type':'application/json'}
    }
    if(!token){
        token = '';
    }
    header.token = token;
    header.username = username
    return new Promise((resolve,reject)=>{
        axios({
            method:'post',
            url:`${SEVERURL}/${api}`,
            headers:header,
            data:pm
        }).then(
            (res:any)=>{
                resolve(res.data)
            }
        ).catch(
            (error:any)=>{
                let data = error.response.data;
                if(Number(error.response.status) === 401 && Number(data.code) === 10002){
                    setTimeout(()=>{
                        window.location.href = `http://localhost:3000/#/login`
                    })
                }
                message.error(data.message)
                reject(data)
            }
        )
    })
}

export {
    getApi,
    postApi,
    LINKURL
}