//import HeaderNavList from './theme/publick/nav'
var HeaderNavList = require('./theme/publick/nav.js');
module.exports = {
    title: 'WET-UI', // 设置网站标题
    base: '/wetui/#',
    description: '前端组件库', //描述
    dest: './dist',   // 设置输出目录
    port: 8080, //端口
    themeConfig: {
        nav: HeaderNavList,
        footer: '粤ICP备案号：18150247号'
    },
    markdown: {
        lineNumbers: true
    },
}