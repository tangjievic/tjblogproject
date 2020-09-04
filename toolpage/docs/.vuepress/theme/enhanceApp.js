import Vue from 'vue';
import jquery from 'jquery'; 
//import VueHighlightJS from 'vue-highlight.js';
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css';
window.$ = jquery;
Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})
//console.log('sdfsafdsa')
export default ({
  Vue,
  options,
  router,
  siteData 
}) => {
    
}