function urlArgs(search:string){
    let args:any = {};
    let query = search.substring(1);
    let pairs = query.split("&");
    for(var i = 0;i < pairs.length; i++){
        var pos = pairs[i].indexOf("=");
        if(pos === -1) continue;
        var name = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1);
        value = decodeURIComponent(value);
        args[name] = value;
    }
    return args;
}

function formatDate(date:any){
    date = `${date}`;
    //console.log(date,'data')
    date.length>10?date = new Date(Number(date)):date = new Date(Number(date)*1000)
    let YY = date.getFullYear() + '-';
    let MM = (date.getMonth() +1<10?'0'+ (date.getMonth()+1):date.getMonth() +1) + '-';
    let DD = (date.getDate()<10? '0' + (date.getDate()):date.getDate());
    return YY + MM + DD
}

export {
    urlArgs,
    formatDate
}