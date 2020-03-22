<template>
    <div class="loginpage flex-v">
        <div class="login_inputbox">
            <h2 class="txt-c pad-20 font-s20">TJCMS,打造属于你自己的个人网站</h2>
            <a-form :form="form" class="form-box" @submit="handleSubmit">
                <a-form-item label="用户名" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                    <a-input
                    v-decorator="['username',
                    {rules: [{ required: true, message: '用户名不能为空' }]}]"
                    placeholder="请输入用户名"/>
                </a-form-item>
                <a-form-item label="密码" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                    <a-input
                    type="password"
                    v-decorator="['password',{rules: [{ required: true, message: '密码不能为空' }]}]"
                    placeholder="请输入密码"/>
                </a-form-item>
                <a-form-item label="验证码" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                    <a-input 
                    v-decorator="['yzm',{rules: [{ required: true, message: '验证码不能为空' }]}]"
                    placeholder="请输入验证码" />
                </a-form-item>
                <div class="yzm">
                    <div id="verifybox">
                        <canvas width="100" height="40" id="verifyCanvas"></canvas>
                        <img id="code_img" @click="updataYzm">
                    </div>
                </div>
                <a-form-item>
                <a-button
                    style="width:100%"
                    type="primary"
                    html-type="submit"
                >
                    CMS登入
                </a-button>
                </a-form-item>
            </a-form>
        </div>
        <footer>
            <p>TJCMS,基于vue2和ant-vue，thinkPHP6打造小型CMS系统</p>
        </footer>
    </div>
</template>
<script>
import loginPage from './index.js'
export default loginPage
</script>
<style lang="less" scoped>
.loginpage{
    position: fixed;
    left: 0;right: 0;top: 0;bottom: 0;
    background: linear-gradient(to top left,#2ee9d8,#2c97e9);
    overflow: auto;
    &::before{
        content: '';
        display: block;
        flex: 1;
    }
    &>footer{
        flex: 1;
        position: relative;
        p{
            position: absolute;
            bottom: 0;left: 0;right: 0;
            font-size: 14px;
            font-weight: 600;
            padding: 5px;
            margin: 0;
            text-align: center;
        }
    }
    .login_inputbox{
        flex:0 0 500px;
        border-radius: 5px;
        box-shadow: 0 0 10px #2e83ed;
        max-width: 900px;
        min-width: 900px;
        width: 100%;
        margin: 0 auto;
        background-image: url(../../assets/images/loginbg.png);
        background-color: #ffffff;
        background-repeat: no-repeat;
        background-size: 50% auto;
        background-position: left center;
    }
}
.form-box{
    width: 50%;
    margin-top: 50px;
    margin-left: 45%;
}
#verifybox{
    padding-left: 33%;
    margin-bottom: 15px;
}
#verifybox img{border-radius: 3px;}
</style>