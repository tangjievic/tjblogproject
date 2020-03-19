
let loginOrsign = ()=>{
    let login_wrap = $('.login-wrap')
    let loginorsign_btn = $('.loginorsign_btn')
    let submit_login_btn = $('.submit_login_btn')
    let submit_sigin_btn = $('.submit_sigin_btn')
    let colse_btn = $('.login-wrap .close_btn .close');
    loginorsign_btn.click(()=>{
        login_wrap.fadeToggle()
    })
    submit_login_btn.click(()=>{
        login_wrap.fadeToggle()
    })
    submit_sigin_btn.click(()=>{
        login_wrap.fadeToggle()
    })
    colse_btn.click(()=>{
        login_wrap.fadeToggle()
    })
}

export default loginOrsign