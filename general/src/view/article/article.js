import './article.less'
import {dreamLike} from '../../components/plugins/canvasbg/dreamlike/index.js'
import '../../components/plugins/slidershow/index'
import '../../../static/fonts/iconfont/iconfont.css'
import "../../libs/js/ripple.js"
import "../../components/plugins/rightemenu/index"
import "../../components/plugins/notice/index"
import "../../components/plugins/confirm/index"
import {getUserMsg,toZan,toCollect}from '../../api/index'

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

let artPage = ()=>{
    let login_state = false//未登录状态
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
    //获取用户信息
    getUserMsg().then(res=>{
        login_state = true
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
            login_state = false
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
        login_state = false
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
    //点赞和收藏逻辑
    $('#zan').click((e)=>{
        if(login_state){
            let num = $('#zan span')[0].innerText
            toZan({
                aid:e.target.dataset.aid,
                username:window.localStorage.getItem('tjuser_username')
            }).then((res)=>{
                if(res.errorcode === 20001){
                    $('#zan span')[0].innerText = Number(num)+1
                    $('#zan i')[0].classList.remove('icon-good')
                    $('#zan i')[0].classList.add('icon-good-filling');
                }else{
                    $('#zan span')[0].innerText = Number(num)-1
                    $('#zan i')[0].classList.add('icon-good')
                    $('#zan i')[0].classList.remove('icon-good-filling');
                }
                spop({
                    template:`${res.message}`, 
                    style:'success',
                    autoclose: 2000,
                    position  : 'top-center',
                });
            })
        }else{
            personalCofrim()
        }
    })
    $('#collection').click((e)=>{
        if(login_state){
            //alert('xxx')[0]
            let num = $('#collection span')[0].innerText
            toCollect({
                aid:e.target.dataset.aid,
                username:window.localStorage.getItem('tjuser_username')
            }).then((res)=>{
                if(res.errorcode === 20001){
                    $('#collection span')[0].innerText = Number(num)+1
                    $('#collection i')[0].classList.remove('icon-like')
                    $('#collection i')[0].classList.add('icon-like_fill');
                }else{
                    $('#collection span')[0].innerText = Number(num)-1
                    $('#collection i')[0].classList.add('icon-like')
                    $('#collection i')[0].classList.remove('icon-like_fill');
                }
                spop({
                    template:`${res.message}`, 
                    style:'success',
                    autoclose: 2000,
                    position  : 'top-center',
                });
            })
        }else{
            personalCofrim()
        }
    })

    //文章评论
    //artComent
    $('.artcomment_input').click(()=>{
        if(login_state){
            let content = $('#artcomment_input').val()
            console.log(content)
        }else{
            personalCofrim()
        }
    })

    //右侧菜单栏行为
    $('#features').click(()=>{
        if(login_state){
            window.open(`${LINKURL}`,'_self')
        }else{
            personalCofrim()
        }
    })
}
artPage();