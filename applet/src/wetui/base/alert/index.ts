interface AlertPamas{
    hide?:boolean,
    visible?:boolean,
    content?:string,
    duration?:number,
    type?:string,
    id?:number
}
const default_data:AlertPamas = {
    hide:true,
    visible:false,
    content:"",
    duration:2,
    type:'success'
}
let timmer:any = null;
let temparray:AlertPamas[] = []
let count = 0;
Component({
    data:{
        alerts_array:<AlertPamas[]>[],
    },
    methods:{
        showAlert(params:AlertPamas):void{
            let {type = 'success',duration = 2,visible=true,...other_params} = params;
            let tempaobj = {
                id:count++,
                type,
                duration,
                visible,
                ...other_params
            }
            temparray.push(tempaobj)
            this.setData({
                alerts_array:<AlertPamas[]>temparray
            })
            if(timmer){
                clearTimeout(timmer)
            }
            let d = tempaobj.duration? tempaobj.duration*1000:500;
            timmer = setTimeout(()=>{
                this.hideAlert()
            },d + ( count - 1 ) * 200)
        },
        hideAlert():void{
            if(temparray.length > 0){
                temparray[temparray.length - 1].visible = false;
                this.setData({
                    alerts_array:temparray
                })
                let time_count = setTimeout(()=>{
                    temparray.pop();
                    clearTimeout(time_count)
                    if(temparray.length===0){
                        timmer = [];
                        count = 0;
                    }
                    this.setData({
                        alerts_array:temparray
                    })
                    this.hideAlert()
                },500)
            }
        }
    }
})