import './index.css';

let indexNav = (pDom:string,idx?:number):void =>{
    let item_id = idx?idx:$(pDom).data('activeidx')
    let temp:number = 0;
    let item_position:number[] = [];
    let p = $(pDom);
    let thread = $(`${pDom} .nav_box_thread`);
    let nav_item = $(`${pDom} .wet-nav_item`);
    let nav_item_a = $(`${pDom} .wet-nav_item>a`);
    let old_select:any = null;
    let select_url:string = '';
    nav_item_a[item_id].style.color = "#5AC2E7"
    nav_item.each((index,element)=>{
        item_position[0] = 0;
        temp = temp + Number($(element).outerWidth(true));
        //console.log(temp)
        item_position[index+1] = Math.round(temp)
        $(element).on('mouseover',()=>{
            thread[0].style.width = $(element).outerWidth(true) + "px";
            thread.css({
                left:item_position[index]+'px'
            })
        })
    })
    thread[0].style.width = $(nav_item[item_id]).outerWidth(true)+'px';
    thread.css({
        left:item_position[item_id]+'px'
    })
    p.on('mouseout',()=>{
        thread[0].style.width = $(nav_item[item_id]).outerWidth(true)+'px';
        thread.css({
            left:item_position[item_id]+'px'
        })
    })

    //查找
    $(`${pDom} .nav_panel .item`).each((index,element)=>{
        if(index == 0){
            $(element).addClass('actived');
            old_select = $(element);
            select_url = $(element).data('url');
        }
        $(element).on('click',()=>{
            old_select.removeClass('actived')
            $(element).addClass('actived');
            old_select = $(element);
            select_url = $(element).data('url');
        })
    })
    $(`${pDom} .nav_panel .wxt-btn`).on('click',()=>{
        let val = $(`${pDom} .nav_panel .input`).val();
        console.log(val)
        //window.open(select_url,'_blank');
    })
}
indexNav('.page_topnav')