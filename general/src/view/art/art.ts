import './art.less';
import '../page';//引入页面公共ts方法模块
import '../../components/plugin/artnav/index.js';

function lisenSroll (){
    let document_height:any = $(document).height()
    $(document).scroll(()=>{
       let scroll_top:any = $(window).scrollTop()
       console.log(document_height - scroll_top)
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