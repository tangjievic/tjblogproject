<style lang="less" scope>
.logo{
    height: 64px;
    line-height: 64px;
    font-size:18px;
    color:#ffffff;
    font-weight: 600;
    text-align: center;
}
</style>
<script lang="ts">
import Vue from "vue";
import leftnav from '../router/leftnav';
export default Vue.extend({
    data() {
        return {
            defaultSelectedKeys:[leftnav[0].name],
            rootSubmenuKeys: [],
            openKeys: [],
            leftnav:leftnav
        };
    },
    created(){
        let root_index = 0;
        leftnav.forEach((item:any)=>{
            if(item.children){
                this.rootSubmenuKeys.push(root_index);
                root_index ++ ;
            }
        })
    },
    methods: {
        onOpenChange(openKeys) {
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.openKeys = openKeys;
            } else {
                this.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        },
        goPage(item){
            console.log(item)
        }
    },
});
</script>
<template>
    <div>
        <div class="logo">
            TANGJIE-BLOG
        </div>
        <a-menu
        mode="inline"
        theme="dark"
        :defaultSelectedKeys="defaultSelectedKeys"
        :open-keys="openKeys"
        style="width: 256px"
        @openChange="onOpenChange"
        @click="goPage"
        >
            <template v-for="(item,index) in leftnav">
                <a-menu-item :key="item.name" v-if="!item.children">
                    <a-icon :type="item.icon" />
                    <span>{{item.label}}</span>
                </a-menu-item>
                <a-sub-menu :key="index" v-else>
                    <span slot="title"><a-icon :type="item.icon" /><span>{{item.label}}</span></span>
                    <a-menu-item :key="its.name" v-for="its in item.children">
                        {{its.label}}
                    </a-menu-item>
                </a-sub-menu>
            </template>
        </a-menu>
    </div>
</template>
