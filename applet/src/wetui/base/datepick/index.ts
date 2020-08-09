const PICKERITEMHEIGHT = 44;//选择item的高度
const FIXEDNUM = 2 ;//固定选框位置索引
Component({
    properties:{
        pickerList:{
            type:Array,
            value:[]
        },
        value:{
            type:Number,
            value:1596456497
        },
        minyear:{
            type:Number,
            value:new Date().getFullYear(),
        },
        maxyear:{
            type:Number,
            value:new Date().getFullYear() + 4,
        },
        type:{
            type:String,
            value:'dateseconds'//date精确到日，datetime精确到分钟,dateseconds精确到秒
        }
    },
    data:{
        year:{
            lable:'year',
            start:0,
            move:0,
            move_string:'',
            oldomove:0,
            selectnum:2,
            startstatus:<boolean>false,
            value:0,
        },
        month:{
            start:0,
            move:0,
            move_string:'',
            oldomove:0,
            selectnum:2,
            startstatus:<boolean>false,
            value:0,
        },
        date:{
            start:0,
            move:0,
            move_string:'',
            oldomove:0,
            selectnum:2,
            startstatus:<boolean>false,
            value:0,
        },
        hours:{
            start:0,
            move:0,
            move_string:'',
            oldomove:0,
            selectnum:2,
            startstatus:<boolean>false,
            value:0,
        },
        minutes:{
            start:0,
            move:0,
            move_string:'',
            oldomove:0,
            selectnum:2,
            startstatus:<boolean>false,
            value:0,
        },
        seconds:{
            start:0,
            move:0,
            move_string:'',
            oldomove:0,
            selectnum:2,
            startstatus:<boolean>false,
            value:0,
        },
        month_lastday:31,
    },
    ready(){
        this.defaultNum();
        this.getPositionMonth();
    },
    methods: {
        getPositionMonth(){
            //let dateObject = 
            // let month = dateObject.getMonth();
            // let year = dateObject.getFullYear()
            // let month_lastday:number = 0;//记录一个月总天数
            // let firstday_date:number = 0;//记录一个月一号是星期几
            // //let pre_month_last_day:number = 0;
            // if(month === 11){
            //     year = year + 1
            //     month = -1
            // }
            // //pre_month_last_day = (new Date(year, month, 0)).getDate();
            // month_lastday = (new Date(year, month+1, 0)).getDate();
            // firstday_date = (new Date(year,month,1)).getDay();
            // //console.log(firstday_date)
            // this.setData({
            //     firstday_date,
            //     month_lastday,
            //     month,
            //     year,
            // })
        },
        moveStart(e:any){
            let obj_temp:any = {};
            let type = e.currentTarget.dataset.type;
            //console.log(type)
            let position = (this.data as any)[type];
            position.start = e.touches[0].pageY;
            position.startstatus = true;
            obj_temp[type] = position
            this.setData(obj_temp)
        }, 
        moveIng(e:any){
            let obj_temp:any = {};
            let pageynum = 0;
            let type = e.currentTarget.dataset.type;
            let position = (this.data as any)[type];
            if( !position.startstatus){
                return
            }
            pageynum = e.touches[0].pageY;
            let move = pageynum - position.start + position.oldomove;
            console.log(move)
            position.move = move;
            position.move_string = `translate3d(0px, ${position.move}px, 0px)`;
            obj_temp[type] = position
            this.setData(obj_temp)
        },
        moveEnd(e:any){
            let obj_temp:any = {};
            let length:number = 0;
            let type = e.currentTarget.dataset.type;
            if(type === 'year'){
                length = this.data.maxyear - this.data.minyear + 1
            }else if(type === 'month'){
                length = 12
            }else if(type === 'date'){
                length = this.data.month_lastday
            }else if(type === 'hours'){
                length = 24
            }else{
                length = 60
            }
            let position = (this.data as any)[type];
            position.startstatus = false

            let yu = Math.round(position.move/PICKERITEMHEIGHT);
            console.log(yu,-(length - FIXEDNUM),length,yu <= -(length - FIXEDNUM))
            if(yu <= -(length - FIXEDNUM)){
                console.log('dsfsafd')
                yu = -(length - 1 - FIXEDNUM)
            }else if(yu > FIXEDNUM){
                yu = FIXEDNUM
            }
            console.log(yu)
            position.move =  yu*PICKERITEMHEIGHT;
            position.selectnum = FIXEDNUM - yu;
            position.oldomove = yu*PICKERITEMHEIGHT;
            position.move_string = `translate3d(0px, ${yu*PICKERITEMHEIGHT}px, 0px)`;
            obj_temp[type] = position;
            this.setData(obj_temp)
        },
        defaultNum(){
            // this.setData({
            //     selectnum:this.data.valueIndex
            // })
            // let move = (FIXEDNUM - this.data.selectnum) * PICKERITEMHEIGHT;
            // console.log(move,this.data.selectnum)
            // this.setData({
            //     move:move,
            //     oldomove:move,
            //     move_string:`translate3d(0px, ${move}px, 0px)`
            // })
        }, 
        confirmEvent(){
            //this.triggerEvent('confirm',this.data.pickerList[this.data.selectnum])
        },
        canselEvent(){
            //this.triggerEvent('cancel',)
        },
    },
})

export{

}