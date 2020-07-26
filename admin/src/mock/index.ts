import Mock from 'mockjs';
import admin from './admin';
import user from './user';
// Mock函数
const { mock } = Mock
let is_mock = false //是否启用mock
Mock.setup({
    timeout: 400
})
if(is_mock){
    mock(/\/admin\/list/, 'get', admin.list)
    mock(/\/admin\/msg/,'get',admin.msg)
    mock(/\/user\/list/,'get',user.list)
}