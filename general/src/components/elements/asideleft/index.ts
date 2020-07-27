import './index.css';
import  TGTool from '../../../components/wetui/alert/index'
let WetAlert = TGTool()
$('.user_login').on('click',(e:any)=>{
    WetAlert.error("当前博客完善中，暂停止开放");
})
$('.user_main').on('click',(e:any)=>{
    WetAlert.error("当前博客完善中，暂停止开放");
})
$('.user_vip').on('click',(e:any)=>{
    WetAlert.error("当前博客完善中，暂停止开放");
})

$('.jsts_code').on('click',(e:any)=>{
    WetAlert.warning("准备中,敬请期待");
})
$('.cssless_code').on('click',(e:any)=>{
    WetAlert.warning("准备中,敬请期待");
})
$('.wetui_pc-vue').on('click',(e:any)=>{
    WetAlert.warning("准备中,敬请期待");
})
$('.wetui_mb-vue').on('click',(e:any)=>{
    WetAlert.warning("准备中,敬请期待");
})
$('.wetui_pc-react').on('click',(e:any)=>{
    WetAlert.warning("准备中,敬请期待");
})

$('.wetui_mb-react').on('click',(e:any)=>{
    WetAlert.warning("准备中,敬请期待");
})

$('.wetui_weapp').on('click',(e:any)=>{
    WetAlert.warning("准备中,敬请期待");
})