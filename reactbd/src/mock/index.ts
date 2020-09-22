import Mock from 'mockjs';
import user from './user';
const { mock } = Mock;
let is_mock = false;//是否启用mock
Mock.setup({
    timeout: 400
})
if(is_mock){
    mock(/\/user\/msg/, 'get', user.msg)
    // mock(/\/admin\/msg/,'get',admin.msg)
    // mock(/\/user\/list/,'get',user.list)
}