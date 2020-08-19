Component({
    externalClasses: ['wet-class'],
    relations:{
        '../item/index':{
            type:'parent'
        },
    },
    properties:{
        label:{
            type:String,
            value:''
        },
        defaultValue:{
            type:String,
            optionalTypes:[Boolean,Number],
            value:''
        },
        value:{
            type:String,
            optionalTypes:[Boolean,Number],
            value:''
        },
        round:{
            type:Boolean,
            value:false
        },
        type:{
            type:String,
            value:'text'//text、textarea、password、number
        },
        disabled:{
            type:Boolean,
            value:false
        }
    },
    observers:{
        'value':function(value){
            console.log(value)
            // if(value!==oldvalue){
            //     console.log()
            // }
        }
    },
    data:{
        isfocus:false,
    },
    ready(){
        this.initInput();
    },
    methods:{
        initInput(){
            const parent = this.getRelationNodes('../item/index');
            if(parent.length !== 0){
                parent[0].emitEventInput(this.data.defaultValue)
            }
            this.setData({
                value:this.data.defaultValue
            })
        },
        focusEvent(){
            this.setData({
                isfocus:true
            })
        },
        blurEvent(){
            this.setData({
                isfocus:false
            })
        },
        inputEvent(e){
            const parent = this.getRelationNodes('../item/index');
            //console.log(parent)
            if(parent.length === 0){
                this.triggerEvent('input',{
                    value:e.detail.value
                })
            }else{
                //console.log(parent)
                parent[0].emitEventInput(e.detail.value)
            }
        }
    }
})