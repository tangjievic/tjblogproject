interface Options{
    content?:string;
    type?:string;
    duration?:number;
    selector?:string;
}
let $Alert = (params:Options):void=>{
    let current_page:WechatMiniprogram.Page.Instance<Record<string, any>, Record<string, any>>[] = getCurrentPages();
    let {selector = '#wet-alert'} = params 
    let ctx = current_page[current_page.length - 1];
    let componentCtx = ctx.selectComponent(selector);
    if(!componentCtx){
        console.error("无法找到alert组件，请查阅相关文档使用该组件")
    }else{
        componentCtx.showAlert(params)
    }
}

export default $Alert;