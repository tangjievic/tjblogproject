// 引入随机函数
import Mock,{ Random } from 'mockjs'
// 引入Mock
// 定义数据
const adminList = Mock.mock({
  'data': [
        {
            id:1,
            adminname:'test',
            password:'123456',
            createtime:'1577344028',
        },
        {
            id:2,
            adminname:'test1',
            password:'123456',
            createtime:'1577344028',
        }
    ]
})

function list (res:any) {
  return {
    code: 20001,
    data: adminList.data,
    message: '请求成功'
  }
}

function msg (res:any){
    return {
        error_code:20001,
        data:adminList.data[0],
        message:'请求成功'
    }
}

export default { 
    list,
    msg
}