const PICKERITEMHEIGHT = 44;//选择item的高度
const FIXEDNUM = 2 ;//固定选框位置索引
Component({
    properties:{
        pickerList:{
            type:Array,
            value:[]
        },
        valueIndex:{
            type:Number,
            value:0
        },
    },
    data:{
        start:0,
        move:0,
        move_string:'',
        oldomove:0,
        pickeritemheight:0,
        selectnum:0,
        startstatus:<boolean>false,    
    },
    ready(){
        this.defaultNum()
    },
    methods: {
        moveStart(e:any){
            console.log(e)
            this.data.startstatus = true;
            this.setData({
                start:e.touches[0].pageY
            })
        }, 
        moveIng(e:any){
            if(!this.data.startstatus){
                return
            }
            let pageynum = 0;
            pageynum = e.touches[0].pageY;
            let move = pageynum-this.data.start+this.data.oldomove
            this.setData({
                move:move,
                move_string:`translate3d(0px, ${move}px, 0px)`
            })
        },
        moveEnd(){
            this.setData({
                startstatus:false
            })
            let yu = Math.round(this.data.move/PICKERITEMHEIGHT);
            console.log(yu)
            if(yu<=-(this.data.pickerList.length - FIXEDNUM)){
                yu = -(this.data.pickerList.length - 1 - FIXEDNUM)
            }else if(yu>FIXEDNUM){
                yu = FIXEDNUM
            }
            let move = yu*PICKERITEMHEIGHT;
            console.log(move,yu)
            this.setData({
                selectnum:FIXEDNUM - yu,
                move:move,
                oldomove:move,
                move_string:`translate3d(0px, ${move}px, 0px)`
            })
        },
        defaultNum(){
            // this.data.pickerList.forEach((item:PicerItem,index:number)=>{
            //     if(item.value === this.data.value){
            //         this.setData({
            //             selectnum:index
            //         })
            //         return;
            //     }
            // })
            this.setData({
                selectnum:this.data.valueIndex
            })
            let move = (FIXEDNUM - this.data.selectnum) * PICKERITEMHEIGHT;
            console.log(move,this.data.selectnum)
            this.setData({
                move:move,
                oldomove:move,
                move_string:`translate3d(0px, ${move}px, 0px)`
            })
        }, 
        confirmEvent(){
            this.triggerEvent('confirm',this.data.pickerList[this.data.selectnum])
        },
        canselEvent(){
            this.triggerEvent('cancel',)
        },
    },
})

export {

}