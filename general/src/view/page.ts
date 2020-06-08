import '../libs/rest.css';
import '../libs/style.less';
import '../components/wetui/row/index.css';
import '../components/wetui/col/index.css';
import '../components/wetui/icon/index.css';
import '../components/wetui/base/base.css';
import '../components/wetui/base/animation.css';
import '../components/wetui/input/index.css';
import '../components/wetui/btn/index.css';
import '../components/elements/footer/index.less';
import '../components/elements/leftele/leftele.less';

import '../components/elements/righttool/index';
import '../components/elements/bubbleline/index.css';
import '../components/elements/adlist/index.less';
import '../components/elements/bgdiv/index.less';

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
//引入导航
import '../components/wetui/nav/index'
