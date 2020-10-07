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
import { mapMutations } from 'vuex'
import { Router as leftnav} from '../router/leftnav';
export default Vue.extend({
    data() {
        return {
            defaultSelectedKeys:[leftnav[0].name],
            rootSubmenuKeys: [] as any,
            openKeys: [] as any,
            leftnav:leftnav,
            selectedKeys:null
        };
    },
    created(){
        let root_index:number = 0;
        (this as any).selectedKeys  = this.$route.name //初始化导航高亮
        leftnav.forEach((item:any,index:number)=>{
            if(item.multiple){
                this.rootSubmenuKeys.push(root_index);
                root_index ++ ;
                item.multiple.forEach((its:any)=>{
                    if(its.name === this.$route.name){
                        this.openKeys = [index]
                    }
                })
            }
        })
        this.changeBreadCrumb()
    },
    watch: {
        $route(value:any){
            (this as any).selectedKeys  = value.name
            leftnav.forEach((item:any,index:number)=>{
                if(item.multiple){
                    item.multiple.forEach((its:any)=>{
                        if(its.name === value.name){
                            this.openKeys = [index]
                        }
                    })
                }
            })
            this.changeBreadCrumb()
        }
    },
    methods: {
        ...mapMutations({
			setBreadState:'breadcrumb/setBreadState'
        }),
        changeBreadCrumb(){
            let breadarray:any[] = [];
            for(let i = 0;i<leftnav.length;i++){
            if( this.$route.name === leftnav[i].name ){
                breadarray.push(leftnav[i])
                break;
            }else{
                let list:any = leftnav[i]
                if(list.multiple){
                    let result = true;
                    list.multiple.forEach((item:any,index:number) =>{
                        if(item.name === this.$route.name){
                            breadarray.push(leftnav[i])
                            breadarray.push(item);
                            result = false
                            return;
                        }
                    })
                    if(!result){
                        break;
                    }
                }else{
                    continue;
                }
            }
        }
            this.setBreadState(breadarray)
        },
        onOpenChange(openKeys:any) {
            const latestOpenKey:any = openKeys.find( (key:any) => this.openKeys.indexOf(key) === -1);
            if ((this as any).rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                (this as any).openKeys = latestOpenKey ? [latestOpenKey] : [];
            } else {
                (this as any).openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        },
        goPage(item:any){
            if(this.$route.name !== item.key){
                this.$router.push({
                    name:item.key
                })  
            }
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
        :open-keys="openKeys"
        style="width: 256px"
        :selectedKeys="[`${selectedKeys}`]"
        @openChange="onOpenChange"
        @click="goPage"
        >
            <template v-for="(item,index) in leftnav">
                <a-menu-item :key="item.name" v-if="!item.multiple">
                    <a-icon :type="item.icon" />
                    <span>{{item.label}}</span>
                </a-menu-item>
                <a-sub-menu :key="index" v-else>
                    <span slot="title"><a-icon :type="item.icon" /><span>{{item.label}}</span></span>
                    <a-menu-item :key="its.name" v-for="its in item.multiple">
                        {{its.label}}
                    </a-menu-item>
                </a-sub-menu>
            </template>
        </a-menu>
    </div>
</template>
