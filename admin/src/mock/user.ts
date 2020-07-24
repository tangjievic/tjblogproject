import Mock,{ Random } from 'mockjs'

const userList = Mock.mock({
    'data|15':[
        {
            'id|+1':1,
            nickname:()=>Random.name(),
            username:()=>Random.natural(10000),
            email:()=>Random.natural(10000),
            type:()=>Random.integer(0,2),
            createtime:Random.date()
        }
    ]
})

function list (res:any) {
    return {
      code: 20001,
      data: userList.data,
      message: '请求成功'
    }
}

export default { 
    list
}