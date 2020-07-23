<style lang="less">
.main_panel{
    height: 100vh;
    overflow: auto;
    width: 100%;
    display: flex;
    .panel_left{
        flex: 0 0 auto;
        height: 100%;
        background-color: #001529;
    }
    .panel_right{
        flex:1;
        height: 100%;
        position: relative;
        header{
            position: absolute;
            z-index: 100;
            top: 0;left: 0;
            right: 0;
            height: 65px;
            background-color:#ffffff;
            box-shadow: 0 1px 4px rgba(0,21,41,.08);
        }
        .content{
            position: absolute;
            top: 65px;
            left: 0;right: 0;
            bottom: 0;
            overflow: auto;
            footer{
                text-align: center;
                padding: 20px;
            }
        }
    }
    .panel_breadcrumb{
        padding: 20px 20px 0 20px;
    }
}
</style>
<template>
    <div class="main_panel">
        <div class="panel_left">
            <left-nav></left-nav>
        </div>
        <div class="panel_right">
            <header>
                <header-nav></header-nav>
            </header>
            <section class="content">
                <div class="panel_breadcrumb">
                    <a-breadcrumb>
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>Application Center</a-breadcrumb-item>
                        <a-breadcrumb-item>Application List</a-breadcrumb-item>
                        <a-breadcrumb-item>An Application</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <slot></slot>
                <footer> tangjie-blog管理平台 </footer>
            </section>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import LeftNav from './LeftNav.vue'
import HeaderNav from './HeaderNav.vue'
export default Vue.extend({
    components:{
        LeftNav,
        HeaderNav
    },
    data(){
        return{

        }
    },
    methods:{
        
    }
})
</script>