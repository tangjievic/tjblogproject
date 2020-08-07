Component({
    relations: {
        '../tabs/index': {
            type: 'parent'
        }
    },

    properties: {
        key: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        dot: {
            type: Boolean,
            value: false
        },
        dotmsg: {
            type: String,
            value: ''
        }
    },

    data: {
        current: false,
    },

    methods: {
        changeCurrent (current) {
            this.setData({ current });
        }
    }
});

export{
    
}