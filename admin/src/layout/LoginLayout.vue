<style lang="less">
.login_box{
    height: 100vh;
    width: 100%;
    position: relative;
    background: linear-gradient(to top left,#9cc5eb,#fff);
    overflow: hidden;
    .ball {
        position: absolute;
        border-radius: 50%;
    }
    .ball_1 {
        background: linear-gradient(to top left,#53a0e7,#85bbee);
        bottom: -100px;
        left: -100px;
        height: 200px;
        width: 200px;
        z-index: 10;
    }
    .ball_2{
            background-color: rgba(83, 160, 231,0.5);
            height: 200px;
            width: 200px;
            left: 50px;
            bottom: -150px;
    }
    .ball_3{
            background-color: #66acee;
            bottom: 10px;
            left: 260px;
            height: 30px;
            width: 30px;
    }
    .ball_4{
            background-color: #53a0e7;
            height: 60px;
            width: 60px;
            bottom: 50px;
            left: 300px;
    }
    .ball_5{
        background: linear-gradient(to top left,#1890ff,#fff);
        z-index: 2;
        top: -50px;
        right: -200px;
        height: 600px;
        width: 600px;
    }
    .ball_6{
        background: linear-gradient(to top left,#fff,#48a5fc);
        top: -100px;
        right: 50px;
        height: 500px;
        width: 500px;
    }
    .login_footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        font-size: 16px;
    }
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>
<template>
    <div class="login_box">
        <div class="ball ball_1"></div>
        <div class="ball ball_2"></div>
        <div class="ball ball_3"></div>
        <div class="ball ball_4"></div>
        <div class="ball ball_5"></div>
        <div class="ball ball_6"></div>
        <slot></slot>
        <footer class="login_footer">
            tangjie-blog提供技术支持，感谢vue2，与ant-design
        </footer>
    </div>
</template>
