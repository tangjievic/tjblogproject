<style lang="less" scoped>
.header{
    height: 100%;
    &::after{
        content: '';
        display: block;
        clear: both;
    }
    .username{
        margin-top: 17px;
        margin-right:25px;
        float: right;
    }
}
</style>
<script lang="ts">
import Vue from 'vue'
import {mapState} from 'vuex'
import Cookies from 'js-cookie'
import { LINKURL } from '../cgictrl/index'
export default Vue.extend({
    data(){
        return{

        }
    },
    computed:{
        ...mapState({
            adminmsg:(state:any)=>state.adminmsg,
        })
	},
    methods:{
        handleMenuClick(e:any) {
            Cookies.remove('admin_token');
            Cookies.remove('adminname');
            (this as any).$message.success('退出成功')
            setTimeout(()=>{
                window.open(LINKURL,'_self');
            },500)
        },
    }
})
</script>
<template>
    <div class="header">
        <div class="username">
            <a-dropdown>
                <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1">退出登陆</a-menu-item>
                </a-menu>
                <a-button style="margin-left: 8px"> {{adminmsg.adminname}} <a-icon type="down" /> </a-button>
            </a-dropdown>
        </div>
    </div>
</template>
