interface AdminmsgState {
    adminname:string;
    createtime:number|null;
}

const state:AdminmsgState = {
	adminname:'',
    createtime:null,
}

const mutations:any = {
    setAdminMsg(state:AdminmsgState,data:any){
        //console.log(data,'sfsadfdsaf')
        state.adminname = data.adminname
        state.createtime = data.createtime
    }
}

export default {
	namespaced:true,
	state,
	mutations,
}