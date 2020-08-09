Component({
    externalClasses:['wet-class'],
    relations:{
        '../input/index':{
            type:'child'
        },
        "../../btn/index":{
            type:'child'
        },
        '../index/index':{
            type:'parent'
        }
    },
    properties:{
        label:{
            type:String,
            value:''
        },
        decorator:{
            type:String,
            value:''
        },
        rules:{
            type:Array,
            value:[]
        }, 
        required:{
            type:Boolean,
            value:false
        }
    },
    data:{
        inputvalue:{

        }
    },
    methods:{
        emitEventInput(value){
            let temp_obj:any = {};
            temp_obj[this.data.decorator] = value;
            this.setData({
                inputvalue:temp_obj
            });
        },

        emitEventSubmit(){
            const parent = this.getRelationNodes('../index/index');
            console.log(parent)
            parent[0].handleClick();
        }
    }
})