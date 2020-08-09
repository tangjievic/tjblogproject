// 本组件的默认选择值根据监听visible来设置相当于用他老当日历显示隐藏的生命周期
Component({
    properties:{
        value:{
            type:String,
            value:''
        }
    },
    data:{
        year:0,//年
        month:0,//月
        idx:1,
        month_lastday:0,//定位月份有多少天
        firstday_date:0,//定位月份1号是星期几
    },
    ready(){
        this.getPositionMonth();
    },
    methods:{
        //获取当前定位时间月份天数，以及1号是周几
        getPositionMonth(){
            let dateObject = this.data.value?new Date(Number(this.data.value)):new Date();
            let month = dateObject.getMonth();
            let year = dateObject.getFullYear();
            let month_lastday:number = 0;//记录一个月总天数
            let firstday_date:number = 0;//记录一个月一号是星期几
            if(month === 11){
                year = year + 1
                month = -1
            }
            month_lastday = (new Date(year, month+1, 0)).getDate();
            firstday_date = (new Date(year,month,1)).getDay();
            this.setData({
                firstday_date,
                month_lastday,
                month,
                year,
            })
        },
    }
})