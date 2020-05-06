import axios from 'axios'
import {message} from 'antd'
let SEVERURL = '';
if(process.env.NODE_ENV === 'development'){
    SEVERURL = 'http://www.tjcms.com/index.php'
}else{
    //SEVERURL = 'http://www.tjcms.com/index.php'
    SEVERURL = 'https://www.tangjietop.cn/index.php'
}
/* 
axios封装 
@ type 指的是管理端发的请求还是用户端发的请求
*/
let getApi = (api,params,type = 0) =>{
    let header = {'Content-Type':'application/json'},token,username;
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
            (res)=>{
                resolve(res.data)
            }
        ).catch(
            (error)=>{
                let data = error.response.data;
                if(Number(error.response.status) === 500 && Number(data.error_code) === 10002){
                    setTimeout(()=>{
                        window.location.href = '/#/login'
                    },500)
                }
                console.log('xx')
                message.error(data.message)
                reject(data)
            }
        )
    })
}

let postApi = (api,params,type = 0,upload=false) => {
    let header = null,token,username,pm = params;
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
            (res)=>{
                resolve(res.data)
            }
        ).catch(
            (error)=>{
                let data = error.response.data;
                if(Number(error.response.status) === 500 && Number(data.error_code) === 10002){
                    setTimeout(()=>{
                        window.location.href = '/#/login'
                    },500)
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
}