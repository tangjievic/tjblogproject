import MoDalOptions from './modal.d'
let Modal:any = (Option:MoDalOptions) => {
    let defaultOptions = {
        title: "提示", // 标题，默认：提示
        width: "300px", // 弹出框宽度，默认 25%
        top: "15vh", // 距离可视区域顶部距离 CSS中 margin-top 值
        type:'primary',//model 类型
        content: "暂无文本", // 正文，默认：正文内容
        cancelText: "取 消", // 取消按钮文本
        confirmText: "确 定", // 确定按钮文
        showConfirm: true, // 是否显示确定按钮
        showClose: true, // 是否显示关闭按钮
        modal: true, // 是否需要遮罩层
        confirm:()=>{},
        cancel:()=>{}
    }
    Object.assign(defaultOptions,Option);
    let body = $('body');
    //创建mask
    let wet_mask = $('<div></div>');
    wet_mask.addClass('wet-mask');
    //创建model
    let wet_model = $('<div></div>')
    wet_model.addClass('wet-modal');
    if(defaultOptions.type!==''&&defaultOptions.type){
        wet_model.addClass(`wet-modal__${defaultOptions.type}`)
    }
    //创建model标题
    let wet_title = $('<div></div>');
    let wet_close = $('<div></div>');
    wet_title.addClass('modal_hd');
    wet_title.text(defaultOptions.title);
    wet_close.addClass('modal_close');
    wet_title.append(wet_close);
    //创建model内容
    let wet_body = $(`<div class="modal_body">
            ${defaultOptions.content}
    </div>`)
    //创建modal脚部
    let wet_ft = $('<div></div>');
    wet_ft.addClass('modal_ft');
    let confirm = $(`<a href="javascript:;" class="wet-btn wet-btn__middle ${defaultOptions.type?'wet-btn__' + defaultOptions.type:''}">${defaultOptions.confirmText}</a>`);
    let cancel = $(`<a href="javascript:;" class="wet-btn wet-btn__middle">${defaultOptions.cancelText}</a>`);
    defaultOptions.showClose?wet_ft.append(cancel):null;
    defaultOptions.showConfirm?wet_ft.append(confirm):null;
    //视图渲染
    body.append(wet_mask);
    wet_model.append(wet_title);
    wet_model.append(wet_body);
    wet_model.append(wet_ft);
    wet_mask.fadeIn(500);
    wet_model.addClass('show');
    body.append(wet_model);
    //视图关闭
    let close_render = ()=>{
        wet_mask.fadeOut(500);
        wet_model.removeClass('show');
        wet_model.addClass('hide');
        let time = setTimeout(()=>{
            wet_mask.remove();
            wet_model.remove();
            clearTimeout(time)
        },500)
    }
    //modal事件
    confirm.on('click',()=>{
        defaultOptions.confirm();
        close_render()
    })
    cancel.on('click',()=>{
        defaultOptions.cancel();
        close_render()
    })
    wet_close.on('click',()=>{
        close_render()
    })
}
export default Modal