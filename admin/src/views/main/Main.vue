<style lang="less" scoped>
.main_panel-box{
    padding: 20px;
    margin: 20px;
    min-height: 300px;
    background-color: #ffffff;
}
</style>
<script lang="ts">
import Vue from 'vue'
import MainLayout from '../../layout/MainLayout.vue'
export default Vue.extend({
    components:{
        MainLayout:MainLayout
    },
    data(){
        return {

        }
    }
})
</script>
<template>
    <main-layout>
        <div class="main_panel-box">

        </div>
    </main-layout>
</template>

