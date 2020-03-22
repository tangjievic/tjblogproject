<template>
  <a-layout id="homepage">
    <a-layout-header class="header">
        <div class="logo">
            <span>TJBLOG-CMS</span>
            <a-menu
                theme="dark"
                mode="horizontal"
                :defaultSelectedKeys="['2']"
                :style="{ lineHeight: '64px' }"
            >
                <!-- <a-menu-item key="1">nav 1</a-menu-item> -->
            </a-menu>
        </div>
        <div class="adminmsg">
            <div class="adminusername">{{adminusername}}</div>
            <div>
                <a-button size="small" type="dashed" ghost>登出</a-button>
            </div>
        </div>
    </a-layout-header>
    <a-layout>
        <a-layout-sider width="200" style="background: #fff">
            <div class="sider_menu">
                <a-menu
                mode="inline"
                @click="handleClick"
                @openChange="onOpenChange"
                :openKeys ="[`${openKeys}`]"
                :defaultSelectedKeys="['0']"
                :selectedKeys="[`${menuseleted_key}`]"
                :style="{ height: '100%', borderRight: 0 }"
                >
                    <template v-for="(item,index) in listMuneArray">
                        <a-menu-item :key="`${index}`" v-if="item.childs.length==0" 
                        @click="toPage(item.pathname)">
                            <a-icon :type="item.icon" />
                            <span>{{item.tilte}}</span>
                        </a-menu-item>
                        <a-sub-menu :key="`${index}`" v-else>
                            <span slot="title">
                                <a-icon :type="item.icon" />{{item.tilte}}
                            </span>
                            <a-menu-item v-for="(its,indexs) in item.childs" 
                            :key="`${index}-${indexs}`"
                            @click="toPage(its.pathname)"
                            >{{its.c_tilte}}</a-menu-item>
                        </a-sub-menu>
                    </template>
                </a-menu>
            </div>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
            <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout-content
            :style="{ background: '#fff', margin: 0, minHeight: '280px',position:'relative' }"
            >
                <div style="position: absolute;top:24px ;left: 24px;right: 24px;bottom: 24px;">
                    <div style="overflow:auto;height:100%">
                        <keep-alive>
                            <router-view v-if="$route.meta.keepalive"></router-view>
                        </keep-alive>
                        <router-view v-if="!$route.meta.keepalive"></router-view>
                    </div>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import homePage from "./index.js";
export default homePage;
</script>

<style lang="less" scoped>
#homepage {
    position: fixed;top: 0;left: 0;right: 0;bottom: 0;
    &::after{
        content: '';
        display: block;
        clear: both;
    }
    .adminmsg{
        float:right;
        display: flex;
        .adminusername{
            padding-right: 10px;
            font-size: 14px;
            color: #ffffff;
        }
    }
    .logo{
        float: left;
        font-size: 22px;
        color: #ffffff;
        font-weight: bold;
    }
    .sider_menu{
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }
}
</style>
