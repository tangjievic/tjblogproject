import '../libs/rest.css';
import '../libs/style.less';
import '../static/fonticon/iconfont.css'
import './common.less';
import '../components/plugin/shuibo/index.ts'
import '../libs/rem.js';
import jq from 'jquery'
//将jq转到页面的全局
declare global {
    interface Window {
         $?: any; 
         jQuery?:any
    }
}
window.$ = window.jQuery = jq
//以下是引入jq插件或jq组件 引入导航
import '../components/wetui/nav/index'
import '../components/elements/listroll/index';
import '../components/elements/artlist/index';
import '../components/elements/asideleft/index.ts';
import '../components/elements/pageloading/index.ts';
