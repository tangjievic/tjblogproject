import './common.less';
import '../components/plugin/shuibo/index';
import jq from 'jquery';
import wetUI from '../components/wetui/index';
import pageLoding from '../components/wetui/base/pageloading/index';
//将jq转到页面的全局
declare global {
    interface Window {
         $?: any; 
         jQuery?:any
    }
}
window.$ = window.jQuery = jq;
//以下是引入jq插件或jq组件 引入导航
wetUI.HeaderNav('.page_topnav');
wetUI.LeftMenu();
pageLoding(1);
// //点击用户图标
// $('.tjblog-user_detail').on('click',()=>{
//     wetUI.Modal({
//         type:"warn",
//         content:"网站升级中，暂不开放"
//     });
// })
// //点击登录图标
// $('.tjblog-user_login').on('click',()=>{
//     wetUI.Modal({
//         type:"warn",
//         content:"网站升级中，暂不开放"
//     })
// })
//暂时不开通的a连接
$('.jsts_code,.tool-list').on('click',()=>{
    wetUI.Modal({
        type:"warn",
        content:"网站升级中，暂不开放"
    })
})
//文档类
$('.wetui_weapp').on('click',()=>{
    wetUI.Modal({
        type:"info",
        content:"组件更新中，文档敬请期待"
    })
})

