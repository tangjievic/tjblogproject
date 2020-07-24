interface BreadCrumbState{
    list:any[];
}

const state:BreadCrumbState = {
    list:[],
}

const mutations:any = {
    setBreadState(state:BreadCrumbState,data:any){
        state.list = data
    }
}

export default {
    namespaced:true,
	state,
	mutations,
}