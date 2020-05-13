let Tool = {
    //去掉字符串两端的空格 
    trim(str) { 
        return str.replace(/(^\s*)|(\s*$)/g, ""); 
    },

    formatDate(date){
        date.length>10?date = new Date(Number(date)):date= new Date(Number(date)*1000)
        let YY = date.getFullYear() + '-';
        let MM = (date.getMonth() +1<10?'0'+ (date.getMonth()+1):date.getMonth() +1) + '-';
        let DD = (date.getDate()<10? '0' + (date.getDate()):date.getDate());

        return YY + MM + DD
    }
}

export default Tool