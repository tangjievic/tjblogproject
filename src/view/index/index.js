import './index.scss'
import {dreamLike} from '../../components/plugins/canvasbg/dreamlike/index.js'
import pullDown from '../../components/elements/leftele/listdiv/index'
import indexTab from '../../components/elements/tab/index'
import '../../components/plugins/slidershow/index'
import '../../components/plugins/showreel/index'
import '../../../static/fonts/iconfont/iconfont.css'
import "../../libs/js/ripple.js"
let indexPage = ()=>{
    //启动背景动画
    new dreamLike({
        name:'bg1',
        circle:{
            amount:88,
            layer:3,
            color:[255,255,255],
            alpha:0.4
        },
        speed:0.5,
    }).init(".bgdiv .canvasbox");
    pullDown();
    //启动轮播图插件
    $(function () {
        $('.shutter').shutter({
          shutterW: 600, // 容器宽度
          shutterH: 260, // 容器高度
          isAutoPlay: true, // 是否自动播放
          playInterval: 3000, // 自动播放时间
          curDisplay: 3, // 当前显示页
          fullPage: false // 是否全屏展示
        });
    });
    //启动tab切换
    indexTab('option');
    //信息循环
    $(".ato-content").slide({titCell:".ato-list-fl ul",mainCell:".ato-list ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:3});
    //水波纹
    new Ripple({
        opacity : 0.6,
        speed : 1,
        bgColor : "#fff",
        cursor : true
    })
}
indexPage();