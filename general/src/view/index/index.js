import './index.less'
import {dreamLike} from '../../components/plugins/canvasbg/dreamlike/index.js'
import pullDown from '../../components/elements/leftele/listdiv/index'
import indexTab from '../../components/elements/tab/index'
import '../../components/plugins/slidershow/index'
import '../../components/plugins/showreel/index'
import '../../../static/fonts/iconfont/iconfont.css'
import "../../libs/js/ripple.js"
import "../../components/plugins/rightemenu/index"
import "../../components/plugins/notice/index"
import "../../components/plugins/confirm/index"
import {getUserMsg,LINKURL}from '../../api/index'

let personalCofrim = ()=>{
    let confirmEvent = ()=>{
        $.DialogByZ.Close();
        spop({
            style: 'success',
            position  : 'top-center',
            template: '正在跳转登录页面,请稍后',
            autoclose: 3000
        });
        setTimeout(()=>{
            window.open(`${LINKURL}/user#/login`,'_self');
        },3500)
    }
    $.DialogByZ.Confirm({Title: "尚未登录", Content: "此模块需要登录后，方可使用，请立即登录！",FunL:confirmEvent})
}
let indexPage = ()=>{
    //文章查询
    $('#search_btn').click(()=>{
        //artlist.html?cid
        let text = $('.search_input').val()
        window.open(`${LINKURL}/artlist.html?keywords=${text}`,'_self');
        //console.log(text)
    })
    //初始化工具栏
    let gengduoneirong = $(`<div class="tooltipify left">个人中心看一看<div x-arrow class="popper__arrow"></div></div>`)
    let favorites=$('<div class="tooltipify left">想给本站点个赞<div x-arrow class="popper__arrow"></div></div>')
    let code = $('<div class="tooltipify left">垃圾代码看一看<div x-arrow class="popper__arrow"></div></div>')
    let dmail =$('<div class="tooltipify left">想给作者发邮箱<div x-arrow class="popper__arrow"></div></div>')
    let code1 = $('<div class="tooltipify left">想给本站留个言<div x-arrow class="popper__arrow"></div></div>')
    $('.item-link.gengduoneirong').append(gengduoneirong)
    $('.item-link.favorites').append(favorites)
    $('.item-link.code').append(code)
    $('.item-link.dmail').append(dmail)
    $('.item-link.code1').append(code1)
    $('.icon-gengduoneirong').mouseenter(()=>{gengduoneirong.fadeIn()}).mouseleave(()=>{gengduoneirong.fadeOut()})
    $('.icon-favorites').mouseenter(()=>{favorites.fadeIn()}).mouseleave(()=>{favorites.fadeOut()})
    $('.icon-code').mouseenter(()=>{code.fadeIn()}).mouseleave(()=>{code.fadeOut()})
    $('.icon-icon_dmail').mouseenter(()=>{dmail.fadeIn()}).mouseleave(()=>{dmail.fadeOut()})
    $('.icon-code1').mouseenter(()=>{code1.fadeIn()}).mouseleave(()=>{code1.fadeOut()})

    //初始化导航栏高亮
    $('.hd_nav .nav_item')[0].classList.add('slected')
    //请求cgi确认用户是否登录
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

        $('.loginorsign_btn').click(()=>{
            let confirmEvent = ()=>{
                $.DialogByZ.Close();
                spop({
                    style: 'success',
                    position  : 'top-center',
                    template: '正在跳转登录页面,请稍后',
                    autoclose: 3000
                });
                setTimeout(()=>{
                    window.open(`${LINKURL}/user#/login`,'_self');
                },3500)
            }
            $.DialogByZ.Confirm({Title: "确认登录/注册？", Content: "如需登录/注册，请点击确认！",FunL:confirmEvent})
        })
    })
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
    //右侧菜单
    $("#gooey-upper").gooeymenu({
        bgColor: "#68d099",
        contentColor: "white",
        style: "circle",
        circle: {
            radius: 85
        },
        size: 80,
        hover: "#5dbb89",
        open:function(){
            $('.right_menubox').css({
                overflow:'visible'
            }).addClass('set_hover').removeClass('hover_box')
        },
        close:function(){
            setTimeout(()=>{
                $('.right_menubox').css({
                    overflow:'hidden',
                }).removeClass('set_hover')
            },500)
            setTimeout(()=>{
                $('.right_menubox').css({
                    overflow:'hidden',
                }).addClass('hover_box')
            },1200)
        }
    });
    //微信小程序版和git地址按钮处理
    $('.gowxapp').click(()=>{
        spop({
            style: 'warning',
            position  : 'top-center',
            template: '项目开发中，敬请期待',
            autoclose: 3000
        });
    })
    $('.gobloggit').click(()=>{
        setTimeout(()=>{
            window.location.href = 'https://github.com/tangjievic/tjblogproject'
        },2000)
        spop({
            style: 'success',
            position  : 'top-center',
            template: '正在打开git地址',
            autoclose: 2000
        });
    })

    //文章列表点击事件
    $('.artlist-link').each((index,e)=>{
        let username = localStorage.getItem('tjuser_username')?localStorage.getItem('tjuser_username'):''
        let token = localStorage.getItem('tjuser_token')?localStorage.getItem('tjuser_token'):''
        let url = $(e).attr('href')
        $(e).attr({
            "href":`${url}&username=${username}&token=${token}`
        })
    })

    $('.art_detail-link').each((index,e)=>{
        let username = localStorage.getItem('tjuser_username')?localStorage.getItem('tjuser_username'):''
        let token = localStorage.getItem('tjuser_token')?localStorage.getItem('tjuser_token'):''
        let url = $(e).attr('href')
        $(e).attr({
            "href":`${url}&username=${username}&token=${token}`
        })
    })
}
indexPage();