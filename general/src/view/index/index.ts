import './index.less';
import '../page';//引入页面公共ts方法模块
import '../../components/plugin/sliderbanner/index.js';
import '../../components/plugin/showreel/index.js';
import '../../components/elements/listroll/index';
import '../../components/plugin/newlist/index.js';
import wetUI from '../../components/wetui/index';
$('.mycard_btn .wet-btn').on('click',()=>{
    wetUI.Alert({
        type:'primary',
        content:"测试alert"
    })
})