import { param } from "jquery"

interface AlertParms {
    type:string;
    content:string,
    duration?:number
}

let Alert = (params:AlertParms = {
    type:'success',//
    content:'这是提示信息',
    duration:2000//停留时间
})=>{
    let alert = $('.wet-alert .wet-alert__item');
    let count = alert.length;
    let item = $(`<div class="wet-alert__item ${params.type}">
            <div class="content">${params.content}</div>
    </div>`);
    $('.wet-alert').append(item);
    item.addClass('show');
    if(!params.duration){
        params.duration = 2000;
    }
    let time = setTimeout(()=>{
        item.addClass('hide');
        item.removeClass('show');
        let end_time = setTimeout(()=>{
            item.remove();
            clearTimeout(end_time)
        },700)
        clearTimeout(time)
    },params.duration)
}

export default Alert