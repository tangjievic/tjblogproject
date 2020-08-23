import './common.less';
//import '../components/plugin/shuibo/index.ts'
import jq from 'jquery';
import wetUI from '../components/wetui/index';
//将jq转到页面的全局
declare global {
    interface Window {
         $?: any; 
         jQuery?:any
    }
}
window.$ = window.jQuery = jq;
//以下是引入jq插件或jq组件 引入导航
wetUI.HeaderNav('.page_topnav')