interface CateTagState{
    catelist:any[];
    taglist:any[];
}

const state:CateTagState = {
    catelist:[],
    taglist:[],
}

const mutations:any = {
    setCateList(state:CateTagState,data:any){
        state.catelist = data
    },
    setTagList(state:CateTagState,data:any){
        console.log(data,'catfatactag')
        state.taglist = data
    }
}

export default {
    namespaced:true,
	state,
	mutations,
}