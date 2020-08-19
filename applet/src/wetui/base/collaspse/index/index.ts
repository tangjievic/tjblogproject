Component({
    externalClasses: ['i-class'],
    relations: {
        '../item/index': {
            type: 'child'
        }
    },
    properties: {
        name: String,
        accordion: Boolean
    },
    methods: {
        clickfn(name) {
            const allList = this.getRelationNodes('../item/index');
            allList.forEach((item) => {
                if (name === item.data.name) {
                    item.setData({
                        showContent:!item.data.showContent
                    });
                } else {
                    item.setData({
                        showContent: false
                    });
                }
            });
        },
    }
});