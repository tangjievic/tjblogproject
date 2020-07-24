import axios from 'axios'
import Vue from 'vue'
import Router from '../router/index'
import Cookies from 'js-cookie'

let SEVERURL = ''; //服务器请求地址
if(process.env.NODE_ENV == 'development'){
    SEVERURL = 'http://www.tjcms.com/index.php'
}else{
    SEVERURL = 'https://www.tangjietop.cn/index.php'
}

let cgiGet = (api:string,params:any) => {
    let header:any = {'Content-Type':'application/json'},token:string|undefined,username:string|undefined;
    token = Cookies.get('token')?Cookies.get('token'):''
    username = Cookies.get('adminname')?Cookies.get('adminname'):''
    header.token = token;
    header.username = username;
    return new Promise((resolve, reject)=>{
        axios({
            method:'get',
            url:`${SEVERURL}/${api}`,
            params:params,
            headers:header
        }).then((res:any)=>{
            resolve(res.data)
        }).catch((error:any)=>{
            let data = error.response.data;
            if(error.response.status === 500){
                Vue.prototype.$message.error(data.message)
            }else{
                if(data.error_code === 10002 ){
                    setTimeout(()=>{
                        Router.push({name:"login",params:{
                            type:'relogin'
                        }})
                    },1000)
                }else{
                    Vue.prototype.$message.error(data.message)
                }
                reject(data)
            }
        })
    })
}

let cgiPost = (api:string,params:any) => {
    let header:any = {'Content-Type':'application/json'},token:string|undefined,username:string|undefined;
    token = Cookies.get('token')?Cookies.get('token'):''
    username = Cookies.get('adminname')?Cookies.get('adminname'):''
    header.token = token;
    header.username = username;
    return new Promise((resolve,reject)=>{
        axios({
            method:'post',
            url:`${SEVERURL}/${api}`,
            headers:header,
            data:params
        }).then((res:any)=>{
            resolve(res.data)
        }).catch((error:any)=>{
            let data = error.response.data;
            if(error.response.status === 500){
                Vue.prototype.$message.error(data.message)
            }else{
                if(data.error_code === 10002 ){
                    setTimeout(()=>{
                        Router.push({name:"login",params:{
                            type:'relogin'
                        }})
                    },1000)
                }else{
                    Vue.prototype.$message.error(data.message)
                }
                reject(data)
            }
        })
    })
}

export{
    cgiGet,
    cgiPost,
    SEVERURL
}