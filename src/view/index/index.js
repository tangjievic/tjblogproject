import './index.scss'
//import $ from "jquery";
import {dreamLike} from '../../components/plugins/canvasbg/dreamlike/index.js'
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
            alpha:0.2
        },
        speed:0.5,
    }).init(".bgdiv .canvasbox");
    //水波纹
    new Ripple({
        opacity : 0.6,
        speed : 1,
        bgColor : "#fff",
        cursor : true
    })
}
indexPage();