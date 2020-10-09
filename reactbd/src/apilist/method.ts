import axios from 'axios'
import Cookies from 'js-cookie'
import { message } from 'antd';
let SEVERURL = ''; //服务器请求地址
let LINKURL = '';
if(process.env.NODE_ENV === 'development'){
    SEVERURL = 'http://www.tangjietop.cn/index.php'
    LINKURL = 'http://localhost:3000'
}else{
    SEVERURL = 'https://www.tangjietop.cn/index.php'
    LINKURL= 'https://www.tangjietop.cn'
}

let cgiGet = (api:string,params:any,have_intercept:boolean = true) => {
    let header:any = {'Content-Type':'application/json'},token:string|undefined,username:string|undefined;
    token = Cookies.get('token')?Cookies.get('token'):''
    username = Cookies.get('username')?Cookies.get('username'):''
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
            if(!error.response){
                message.error('系统错误');
                setTimeout(()=>{
                    window.open(`${LINKURL}`,"_self")
                },1000)
                return
            }

            let data:any = error.response.data;

            if(have_intercept&&data.code){
                if(Number(error.response.status) === 401 && (Number(data.code) === 10002 || Number(data.code === 10001))){
                    setTimeout(()=>{
                        window.location.href = `${LINKURL}/#/login`
                    },1000)
                }
                message.error(data.message);
                reject(data)
            }
            reject(data)
        })
    })
}

let cgiPost = (api:string,params:any) => {
    let header:any = {'Content-Type':'application/json'},token:string|undefined,username:string|undefined;
    token = Cookies.get('token')?Cookies.get('token'):''
    username = Cookies.get('username')?Cookies.get('username'):''
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
            if(!error.response){
                message.error('系统错误');
                setTimeout(()=>{
                    window.open(`${LINKURL}`,"_self")
                },1000)
                return
            }

            let data:any = error.response.data;

            if(Number(error.response.status) === 401 && (Number(data.code) === 10002 || Number(data.code === 10001))){
                setTimeout(()=>{
                    window.location.href = `${LINKURL}/#/login`
                },1000)
            }
            message.error(data.message);
            reject(data)
        })
    })
}

export{
    cgiGet,
    cgiPost,
    SEVERURL,
    LINKURL
}