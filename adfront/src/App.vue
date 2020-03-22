<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"></router-view>
  </div>
</template>
<style lang="less">
.flex-v{display: flex;flex-direction: column;}
.txt-c{text-align: center;}
.pad-5{padding: 5px;}
.pad-20{padding: 20px;}
.font-s20{font-size: 20px;}
.btn_box{padding: 10px 0;}
.overflowed{overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;word-wrap: break-word;word-break: break-all;}
</style>
