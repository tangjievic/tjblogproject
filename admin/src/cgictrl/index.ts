import axios from 'axios'
import Vue from 'vue'
import Router from '../router/index'
import Cookies from 'js-cookie'

let SEVERURL = ''; //服务器请求地址
let LINKURL = '';
if(process.env.NODE_ENV == 'development'){
    SEVERURL = 'http://www.tangjietop.cn/index.php'
    LINKURL  = 'http://www.tangjietop.cn'
}else{
    SEVERURL = 'https://www.tangjietop.cn/index.php'
    LINKURL  = 'http://www.tangjietop.cn'
}

let cgiGet = (api:string,params:any) => {
    let header:any = {'Content-Type':'application/json'},token:string|undefined,username:string|undefined;
    token = Cookies.get('admin_token')?Cookies.get('admin_token'):''
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
            let data:any = null;
            if(error.response){
                data = error.response.data
            }else{
                Vue.prototype.$message.error('系统错误，请稍后再试');
                reject(data)
                return
            }
            if(error.response.status === 401){
                setTimeout(()=>{
                    Router.push({name:"login",params:{
                        type:'relogin'
                    }})
                },1000)
                Vue.prototype.$message.error(data.message);
                reject(data)
                return
            }
        })
    })
}

let cgiPost = (api:string,params:any) => {
    let header:any = {'Content-Type':'application/json'},token:string|undefined,username:string|undefined;
    token = Cookies.get('admin_token')?Cookies.get('admin_token'):''
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
            let data:any = null;
            if(error.response){
                data = error.response.data
            }else{
                Vue.prototype.$message.error('系统错误，请稍后再试');
                reject(data)
                return
            }
            if(error.response.status === 401){
                setTimeout(()=>{
                    Router.push({name:"login",params:{
                        type:'relogin'
                    }})
                },1000)
                Vue.prototype.$message.error(data.message);
                reject(data)
                return
            }
        })
    })
}

export{
    cgiGet,
    cgiPost,
    SEVERURL,
    LINKURL
}