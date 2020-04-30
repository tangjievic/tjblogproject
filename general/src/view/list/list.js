import './list.less'
import {dreamLike} from '../../components/plugins/canvasbg/dreamlike/index.js'
import pullDown from '../../components/elements/leftele/listdiv/index'
import '../../components/plugins/slidershow/index'
import '../../components/plugins/showreel/index'
import '../../../static/fonts/iconfont/iconfont.css'
import "../../libs/js/ripple.js"
import "../../components/plugins/rightemenu/index"
import "../../components/plugins/notice/index"
import {getUserMsg}from '../../api/index'

let personalCofrim = ()=>{
    let confirmEvent = ()=>{
        //window.open('http://www.baidu.com','_self');
        $.DialogByZ.Close();
        spop({
            style: 'success',
            position  : 'top-center',
            template: '正在跳转登录页面,请稍后',
            autoclose: 3000
        });
        setTimeout(()=>{
            window.open('http://localhost:3000/#/login','_self');
        },3500)
    }
    $.DialogByZ.Confirm({Title: "尚未登录", Content: "此模块需要登录后，方可使用，请立即登录！",FunL:confirmEvent})
}
let listPage = ()=>{
    //启动背景动画
    getUserMsg().then(res=>{
        console.log(res)
        $('.user_box .user_msg').html(
            `<div>
                <div class="user_state">已登录</div>
                <div class="user_state text-ellipt" style="padding:0 10px"><a class="user_link">${res.data.nickname?res.data.nickname:res.data.username}</a></div>
            </div>`
        )
        $('#gooey-upper .text').text('个人空间')
        
        $('#h-spaced-menu').click(()=>{
            window.localStorage.setItem('tjuser_username','');
            window.localStorage.setItem('tjuser_token','');
            spop({
                style: 'success',
                position  : 'top-center',
                template: '退出登录成功',
                autoclose: 3000
            });
            //window.location.reload();
            setTimeout(()=>{
                window.location.reload();
            },1500)
        })


    }).catch(error=>{
        $('.user_box .user_msg').html(
            `<div>
                <div class="user_state"><a class="loginorsign_btn">未登陆</a></div>
                <div class="user_state"><a class="loginorsign_btn">登录/注册</a></div>
            </div>`
        )
        $('#gooey-upper .text').text('尚未登录')
        //尚未登录，个人空间不能做以下操作
        $('#features,#menu-v-example,#docs,#event-api,#h-spaced-menu').click(()=>{
            personalCofrim()
        })
    })
    
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
    //信息循环
    $(".ato-content").slide({titCell:".ato-list-fl ul",mainCell:".ato-list ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:3});
    //水波纹
    new Ripple({
        opacity : 0.6,
        speed : 1,
        bgColor : "#fff",
        cursor : true
    })
    //右侧菜单
    $("#gooey-upper").gooeymenu({
        bgColor: "#68d099",
        contentColor: "white",
        style: "circle",
        horizontal: {
            menuItemPosition: "glue"
        },
        vertical: {
            menuItemPosition: "spaced",
            direction: "up"
        },
        circle: {
            radius: 80
        },
        margin: "small",
        size: 90,
        bounce: true,
        bounceLength: "small",
        transitionStep: 100,
        hover: "#5dbb89"
    });
}
listPage();