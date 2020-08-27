import Rules from '../rules';
Component({
    relations:{
        '../item/index':{
            type:'child'
        },
    },
    properties:{
        title:{
            type:String,
            value:''
        }
    },
    methods:{
        handleClick(){
            let form_value:any = {};
            let items = this.getRelationNodes('../item/index');
            let all_result = true;
            //console.log(items)
            items.forEach((item:any)=>{
                //做值的规则校验
                item.data.rules.forEach((its:any)=>{
                    //console.log(its)
                    //if(its)
                    if(its.ownrules){
                        let result = Rules[its.ownrules](item.data.inputvalue[item.data.decorator]);
                        //console.log(result)
                        if(!result){
                            all_result = false
                            //对item组件进行值的设置和提示显示，并且将错误值置空
                        }
                    }else{
                        //对its.ownrules进行类型判断，如果是正则这用正则体系，如果是函数就用函数体系
                    }
                })
                //Rules[item.]
                console.log(item)
                let data = item.data.inputvalue
                Object.assign(form_value,data)
            })
            //console.log(form_value)
            //如果有数据校验出错将不能提交数据
            if(!all_result){
                return
            }
            this.triggerEvent('submit',{
                value:form_value
            })
        }
    },
})