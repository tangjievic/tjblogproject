import './list.less'
import {dreamLike} from '../../components/plugins/canvasbg/dreamlike/index.js'
import pullDown from '../../components/elements/leftele/listdiv/index'
import '../../components/plugins/slidershow/index'
import '../../components/plugins/showreel/index'
import '../../../static/fonts/iconfont/iconfont.css'
import "../../libs/js/ripple.js"
import rightMenu from "../../components/plugins/rightemenu/index"
import "../../components/plugins/notice/index"
import {getUserMsg,LINKURL}from '../../api/index'
setTimeout(()=>{
    $('.loading_box').fadeOut()
},1500)
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
let listPage = ()=>{
    rightMenu.init()
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

    //启动背景动画
    getUserMsg().then(res=>{
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
       rightMenu.success()

    }).catch(error=>{
        $('.user_box .user_msg').html(
            `<div>
                <div class="user_state"><a class="loginorsign_btn">未登陆</a></div>
                <div class="user_state"><a class="loginorsign_btn">登录/注册</a></div>
            </div>`
        )
        $('#gooey-upper .text').text('尚未登录')
        //尚未登录，个人空间不能做以下操作
        rightMenu.fail(personalCofrim)
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
listPage();