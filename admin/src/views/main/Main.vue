<style lang="less" scoped>
.main_panel-box{
    padding: 20px;
    min-height: 300px;
    background-color: #ffffff;
}
</style>
<script lang="ts">
import Vue from 'vue'
import {mapMutations} from 'vuex'
import MainLayout from '../../layout/MainLayout.vue'
import { getAdminMsg } from '../../cgictrl/adminapi'
export default Vue.extend({
    components:{
        MainLayout:MainLayout
    },
    created(){
        getAdminMsg().then((res:any)=>{
            let data = res.data?res.data:res;
            console.log(data)
            this.setAdminMsg({
                adminname:data.adminname,
                createtime:Number(data.createtime)
            })
        })
    },
    data(){
        return {

        }
    },
    methods:{
        ...mapMutations({
			setAdminMsg:'adminmsg/setAdminMsg'
		}),
    }
})
</script>
<template>
    <main-layout>
        <div class="main_panel-box">
            <keep-alive>
                <router-view v-if="$route.meta.keepalive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepalive"></router-view>
        </div>
    </main-layout>
</template>

