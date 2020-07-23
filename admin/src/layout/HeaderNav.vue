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
export default Vue.extend({
    data(){
        return{

        }
    },
    methods:{
        handleMenuClick(e:any) {
            console.log('click', e);
        },
    }
})
</script>
<template>
    <div class="header">
        <div class="username">
            <a-dropdown>
                <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
                    <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
                    <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
                </a-menu>
                <a-button style="margin-left: 8px"> 用户名 <a-icon type="down" /> </a-button>
            </a-dropdown>
        </div>
    </div>
</template>
