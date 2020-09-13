interface MoDalOptions {
    title?:string;// 标题，默认：提示
    width?:string; // 弹出框宽度，默认 25%
    top?: string; // 距离可视区域顶部距离 CSS中 margin-top 值
    type?:string;//model 类型
    content?: string; // 正文，默认：正文内容
    cancelText?: string; // 取消按钮文本
    confirmText?: string; // 确定按钮文本
    showCancelButton?: boolean; // 是否显示取消按钮
    showConfirmButton?: boolean; // 是否显示确定按钮
    showClose?: boolean;  // 是否显示关闭按钮
    modal?: boolean; // 是否需要遮罩层
    confirm?: ()=>void, // 确认后 回调函数
    cancel?: ()=>void, // 取消后 回调函数
}

export default MoDalOptions