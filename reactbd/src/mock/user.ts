import Mock from 'mockjs';

const useList = Mock.mock({
    'data':[
        {
            id:'1',
            nickname:'小笨猪飞',
            username:'981955667@qq.com',
            email:'981955667@qq.com',
            profession:'前端攻城狮',
            signature:'喜欢许嵩的，大家都是好朋友'
        }
    ]
})

function msg (res:any){
    return{
        error_code:200,
        data:useList.data[0],
        message:'请求成功'
    }
}

export default {
    msg
}