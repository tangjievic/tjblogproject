import './index.less';
let $ul = $('.roll ul');
let timeID:any;
let listRoll = ():void=>{
    clearInterval(timeID);
    timeID = setInterval(()=>{
        $ul.find("li:first").removeClass().addClass('roll_hide').appendTo($ul);
        for(var i=0;i<3;i++){
            $ul.find("li").eq(i).removeClass().addClass('roll_'+ (i+1) +'');
        }
        listRoll()
    },3000)
}
listRoll()