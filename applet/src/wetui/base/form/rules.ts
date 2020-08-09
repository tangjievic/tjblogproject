//此文件存储内置校验规则
//1.required
const rules:any = {
    required:(value:any)=>{
        if(value){
            return true
        }else{
            return false
        }
    }
}
export default rules