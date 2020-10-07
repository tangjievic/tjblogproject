import axios from 'axios'
import Cookies from 'js-cookie'
/**
 *  axios 全局拦截，对一般错误拦截直接报错误码，对token验证错误，提示，并提示用户是否登录
 */
let SEVERURL = ''; //服务器请求地址
let LINKURL = ''; 
if(process.env.NODE_ENV == 'development'){
    SEVERURL = 'http://www.tangjietop.cn/index.php'
    LINKURL  = 'http://www.tangjietop.cn'
}else{
    SEVERURL = 'https://www.tangjietop.cn/index.php'
    LINKURL  = 'https://www.tangjietop.cn'
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
            //console.log(error)
            let data:any = null;
            if(error.responese){
                data = error.response.data
            }else{
                // Vue.prototype.$message.error('系统繁忙，请稍后再试')
                // setTimeout(()=>{
                //     Router.push({name:"login",params:{
                //         type:'relogin'
                //     }})
                // },1000)
                return
            }
            if(error.response.status === 500){
                //Vue.prototype.$message.error(data.message)
            }else{
                if(data.error_code === 10002 ){
                    setTimeout(()=>{
                        // Router.push({name:"login",params:{
                        //     type:'relogin'
                        // }})
                    },1000)
                }else{
                    //Vue.prototype.$message.error(data.message)
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
            let data:any = null;
            if(error.responese){
                data = error.response.data
            }else{
                //Vue.prototype.$message.error('系统繁忙，请稍后再试')
                // setTimeout(()=>{
                //     Router.push({name:"login",params:{
                //         type:'relogin'
                //     }})
                // },1000)
                return
            }
            if(error.response.status === 500){
                //Vue.prototype.$message.error(data.message)
            }else{
                if(data.error_code === 10002 ){
                    // setTimeout(()=>{
                    //     Router.push({name:"login",params:{
                    //         type:'relogin'
                    //     }})
                    // },1000)
                }else{
                    //Vue.prototype.$message.error(data.message)
                }
                reject(data)
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