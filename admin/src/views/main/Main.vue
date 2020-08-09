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
import Cookies from 'js-cookie';
import { getAdminMsg } from '../../cgictrl/adminapi'
import { getCate,getTags} from '../../cgictrl/catetagapi';
export default Vue.extend({
    components:{
        MainLayout:MainLayout
    },
    created(){
        getAdminMsg().then((res:any)=>{
            let data = res.data?res.data:res;
            console.log(data)
            this.setAdminMsg({
                adminname:data.username,
                createtime:Number(data.createtime)
            })
        })
        getCate().then((res:any)=>{
            this.setCateList(res.data);
        })
        getTags().then((res:any)=>{
            this.setTagList(res.data);
        })
        //测试 添加token
        // Cookies.set('token', 'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUlzSW1wMGFTSTZJblJoYm1kcWFXVjBiM0FpZlEuZXlKcGMzTWlPaUpvZEhSd09sd3ZYQzkwWVc1bmFtbGxkRzl3TG1OdUlpd2lhblJwSWpvaWRHRnVaMnBwWlhSdmNDSXNJbWxoZENJNk1UVTVOVFkwT0RnMk15d2libUptSWpveE5UazFOalE0T1RJekxDSmxlSEFpT2pFMU9UVTRORGc0TmpNc0ltRmtiV2x1ZFhObGNtNWhiV1VpT2lKMFlXNW5hbWxsZEc5d0luMC55ZUlDQkRwT181TWtJU3VhTE5zMDVKeG9zN09CaWlmbWh2TVhXTm80cTFz', { expires: 2 });
        // Cookies.set('adminname','tangjietop',{ expires: 2 })
    },
    data(){
        return {

        }
    },
    methods:{
        ...mapMutations({
            setAdminMsg:'adminmsg/setAdminMsg',
            setCateList:'catetag/setCateList',
            setTagList:"catetag/setTagList"
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

