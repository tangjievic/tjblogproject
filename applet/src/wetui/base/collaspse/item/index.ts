// const query = wx.createSelectorQuery();
Component({
    externalClasses: ['wet-class'],
    relations: {
        '../index/index': {
            type: 'parent',
            linked: function (target) {
                const query = this.createSelectorQuery();
                query.select(`#${this.data.name} .content`).boundingClientRect((rect:any)=>{
                    console.log(rect.height)
                    this.setData({
                        height:rect.height
                    })
                }).exec()
                const options:any = {
                    accordion: target.data.accordion
                }
                // console.log(target,query.select(`#${target.data.name} .content`).boundingClientRect())
                if (target.data.name === this.data.name) {
                    options.showContent = true;
                }
                this.setData(options);
            }
        }
    },

    properties: {
        label: String,
        name: String,
    },

    data: {
        showContent:false,
        accordion: false,
        height:0,
    },

    options: {
        multipleSlots: true
    },

    methods: {
        trigger() {
            if(this.data.accordion){
                //this.triggerEvent()
                let parent = this.getRelationNodes('../index/index');
                parent[0].clickfn(this.data.name)
            }else{
                this.setData({
                    showContent:!this.data.showContent
                })
            }
            // const data = this.data;
            // console.log()
            // if (data.accordion) {
            //     this.triggerEvent('collapse', {name: data.name}, {composed: true, bubbles: true});
            // } else {
            //     this.setData({
            //         //showContent: data.showContent ? '' : 'i-collapse-item-show-content'
            //     });
            // }
        },
    }
});
export {

}