interface OptionItem {
    label:string;
    value:any;
    selected?:boolean;
}
let tab_key = true;
Component({
    externalClasses:['wet-class'],
    relations:{
        '../item/index':{
            type:'parent'
        }
    },
    properties:{
        defaultValue:{
            type:String,
            optionalTypes:[Boolean,Number,Array],
            value:''
        },
        option:{
            type:Object,
            value:[]
        },
        type:{
            type:String,
            value:'single'//single,multiple
        },
        disabled:{
            type:Boolean,
            value:false
        },
        round:{
            type:Boolean,
            value:false
        },
    },
    data:{
        value:<OptionItem[]>[],
        select:<any>'',
        show:false,
        amintion_show:false
    },
    ready(){
        this.initSelect(this.data.defaultValue);
    },
    methods: {
        initSelect(params){
            let value = JSON.parse(JSON.stringify(this.data.option))
            value.forEach((item:OptionItem)=>{
                item.selected = false
                if(this.data.type === 'single'){
                    const parent = this.getRelationNodes('../item/index');
                    if(parent.length !== 0){
                        parent[0].emitEventInput(this.data.defaultValue)
                    }
                    if(item.value === params){
                        item.selected = true
                    }
                }
            })
            this.setData({
                value,
                select:this.data.defaultValue
            })
        },
        selectAction(e:any){
            let select:any = null;
            if(this.data.type === 'single'){
                const parent = this.getRelationNodes('../item/index');
                console.log(parent)
                this.initSelect(e.currentTarget.dataset.value)
                select = e.currentTarget.dataset.value;
                this.setData({
                    amintion_show:false,
                    select
                })
                setTimeout(() => {
                   this.setData({
                       show:false
                   })
                },200);
                if(parent.length === 0){
                    this.triggerEvent('change',{
                        value:select
                    })
                }else{
                    parent[0].emitEventInput(this.data.select)
                }
            }else{

            }
        },
        openAction(){
            if(this.data.disabled){
                return
            }
            if(tab_key){
                let show = !this.data.show
                tab_key = false
                if(!show){
                    setTimeout(() => {
                        this.setData({
                            amintion_show:!this.data.amintion_show
                        })
                    });
                    setTimeout(()=>{
                        this.setData({
                            show
                        })
                    },200)
                }else{
                    this.setData({
                        show,
                        amintion_show:!this.data.amintion_show
                    })
                }
                let key_time = setTimeout(() => {
                    tab_key = true
                    clearTimeout(key_time)
                }, 300);
            }else{
                return
            }
        }
    },
    
})

export{

}