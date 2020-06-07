import '../libs/rest.css';
import '../components/wetui/row/index.css';
import '../components/wetui/col/index.css';
import '../components/wetui/base/base.css';
import jq from 'jquery';

//引入导航
import '../components/wetui/nav/index.css';
//将jq转到页面的全局
declare global {
    interface Window {
         $?: any; 
         jQuery?:any
    }
}
window.$ = window.jQuery = jq;

// $('body').click(()=>{
//     alert("调用成功")
// })