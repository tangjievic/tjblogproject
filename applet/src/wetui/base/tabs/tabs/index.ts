Component({
    externalClasses: ['i-class'],

    relations: {
        '../item/index': {
            type: 'child',
        }
    },

    properties: {
        current: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: '#1abc9c'
        },
        scroll: {
            type: Boolean,
            value: false
        },
        fixed: {
            type: Boolean,
            value: false
        },
    },
    observers:{
        'current':function(){
            this.changeCurrent();
        }
    },
    data:{
        itemComponentAarry:<any>[],
        scroll: false
    },
    ready(){
        this.changeCurrent();
    },
    methods: {
        //组件初始化事件，用来做其下子组件插入移除时候的视图初始化和将相关联的组件事件需要到父组件拿参数进行初始化
        changeCurrent (val?:string) {
            val = val?val:this.data.current;
            let items = this.getRelationNodes('../item/index');//获取到子组件节点
            let len = items.length;
            if(len>0){
                console.log(items[0].data.title)
                let itemComponentAarry:any[]= [];
                items.forEach((item:any)=>{
                    let  data = item.data;
                    itemComponentAarry.push(data);
                    item.changeCurrent(item.data.key === val);
                })
                this.setData({
                    itemComponentAarry:itemComponentAarry
                })
            }
        },
        handleClickItem (e) {//父级分发事件
            let key = e.currentTarget.dataset.key
            this.triggerEvent('change', { key });
        }
    }
});
export{

}