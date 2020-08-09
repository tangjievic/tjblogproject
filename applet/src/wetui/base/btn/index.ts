let time_key:boolean = true;
Component({
    externalClasses: ['wet-class'],
    relations:{
        '../form/item/index':{
            type:'parent'
        }
    },
    properties: {
        type: {
            type: String,
            value: '',
        },
        color:{
            type:String,
            value: '',
        },
        inline: {
            type: Boolean,
            value: false
        },
        size: {
            type: String,
            value: 'large',
        },
        round:{
            type:Boolean,
            value:false
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        plain:{
            type:Boolean,
            value:false
        },
        loading: {
            type: Boolean,
            value: false,
        },
        openType: String,
        appParameter: String,
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        sessionFrom: {
            type: String,
            value: ''
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },
    data:{
        hoverStopPropagation: Boolean,//微信小程序阻止多层嵌套组件的点击事件冒泡
        boxShow:false,
        throttle:false
    },
    methods: {
        handleTap () {
            const parent = this.getRelationNodes('../form/item/index');
            console.log(parent)
            if (this.data.disabled){
                return;
            };
            if(!this.data.throttle){
                this.setData({
                    throttle:true
                })
                let time = setTimeout(()=>{
                    this.setData({
                        throttle:false
                    })
                    clearTimeout(time)
                },1000)
                if(parent.length === 0){
                    this.triggerEvent('click');
                }else{
                    console.log(parent)
                    parent[0].emitEventSubmit();
                }
            }
        },
        bindgetuserinfo({ detail = {} } = {}) {
            this.triggerEvent('getuserinfo', detail);
        },
        bindcontact({ detail = {} } = {}) {
            this.triggerEvent('contact', detail);
        },
        bindgetphonenumber({ detail = {} } = {}) {
            this.triggerEvent('getphonenumber', detail);
        },
        binderror({ detail = {} } = {}) {
            this.triggerEvent('error', detail);
        },
        changeBoxShow(){
            this.setData({
                boxShow:true
            })
            if(time_key){
                time_key = false;
                let time = setTimeout(()=>{
                    this.setData({
                        boxShow:false
                    })
                    time_key = true;
                    clearTimeout(time)
                },1000)
            }
        }
    }
})