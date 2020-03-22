class dataChange{
    constructor(){

    }
    /**
     * 时间戳转换
     * @param {*} timetamp 时间戳
     * @param {*} type 时间输出精确范围
     */
    static changeTimeTamp(timetamp,type="second"){
        timetamp = String(timetamp);
        if(timetamp.length==13){
            timetamp = Number(timetamp)
        }else{
            timetamp = Number(timetamp*1000);
        }
        let now = new Date(timetamp);
        let year=now.getFullYear(); 
        let month=now.getMonth()+1; 
        let date=now.getDate(); 
        let hour=now.getHours(); 
        let minute=now.getMinutes(); 
        let second=now.getSeconds(); 
        if(type=="year"){
            return year;
        }else if(type =="month"){
            return `${year}/${month}`;
        }else if(type =="date"){
            return `${year}/${month}/${date}`
        }else if(type =="hour"){
            return `${year}/${month}/${date} ${hour}:${minute}:${second}`
        }
    }
}

export default dataChange