import './art.less';
import '../page';//引入页面公共ts方法模块
import '../../components/plugin/artnav/index.js';
import  TGTool from '../../components/wetui/alert/index';
let WetAlert = TGTool();
function lisenSroll (){
    let document_height:any = $(document).height()
    $(document).scroll(()=>{
       let scroll_top:any = $(window).scrollTop()
       //console.log(document_height - scroll_top)
       if(scroll_top>360){
            if((document_height - scroll_top)<1050){
                $('.toc_box').css({
                    transform:` translateY(-88px)`
                })
            }else{
                $('.toc_box').css({
                    transform:` translateY(0)`
                })
            }
            if($('.toc_box').hasClass('fixed-top')){
                return
            }
            $('.toc_box').addClass('fixed-top')
       }else{
            $('.toc_box').removeClass('fixed-top')
       }
    })
}
lisenSroll();

$('.wet-submit_comment').on('click',(e:any)=>{
    WetAlert.warning('系统升级中，暂停使用')
})
$('.wet-back').on('click',(e:any)=>{
    window.history.back()
})