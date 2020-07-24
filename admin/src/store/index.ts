import Vue from 'vue'
import Vuex from 'vuex'
import adminmsg from './modules/adminmsg'
import breadcrumb from './modules/breadcrumb'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        adminmsg,
        breadcrumb
	},
    state: {
    },
    mutations: {
    },
    actions: {
    },
})
