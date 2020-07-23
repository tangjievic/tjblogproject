<style lang="less" scoped>
.login_form{
    position: absolute;
    width: 360px;
    height: 440px;
    top: 50%;
    left: 50%;
    margin-top: -220px;
    box-sizing: border-box;
    margin-left: -180px;
    background-color: #fff;
    -webkit-box-shadow: 0 7px 25px rgba(0,0,0,.08);
    box-shadow: 0 7px 25px rgba(0,0,0,.08);
    padding: 60px 25px 25px;
    text-align: left;
    border-radius: 3px;
    z-index: 100;
    .lowin-brand {
        overflow: hidden;
        width: 100px;
        height: 100px;
        line-height: 80px;
        text-align: center;
        border-radius: 50%;
        -webkit-box-shadow: 0 4px 40px rgba(0,0,0,.07);
        box-shadow: 0 4px 40px rgba(0,0,0,.07);
        padding: 10px;
        background-color: #fff;
        z-index: 1;
        position: absolute;
        top: -50px;
        left: 130px;
        font-size: 15px;
        font-weight: 600;
    }
    .form_box{
        .box_hd{
            padding: 20px;
            text-align: center;
            font-size: 14px;
        }
    }
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            formLayout: 'horizontal',
            form: (this as any).$form.createForm(this, { name: 'coordinated' }),
        }
    },
    methods: {
        handleSubmit(e:any) {
            e.preventDefault();
            this.form.validateFields((err:any, values:any) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    if(values.password !== values.rpassword){
                        this.$message.error('前后密码输入不一致，验证失败');
                    }
                }
            });
        },
    },
})
</script>
<template>
    <div class="login_form">
        <div class="lowin-brand">TJ-AMDIN</div>
        <div class="form_box">
            <div class="box_hd">
                博客网站管理员登陆
            </div>
            <a-form labelAlign="left" :form="form" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" @submit="handleSubmit">
                <a-form-item label="管理员账号">
                    <a-input
                        v-decorator="['adminname', { rules: [{ required: true, message: '请输入账号!' }] }]"
                    />
                </a-form-item>
                <a-form-item label="登陆密码">
                    <a-input
                    v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
                    />
                </a-form-item>
                 <a-form-item label="密码验证">
                    <a-input
                    v-decorator="['rpassword', { rules: [{ required: true, message: '请再次输入密码!' }] }]"
                    />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 16, offset: 8 }" style="margin-top:20px">
                    <a-button type="primary" html-type="submit" block>
                        登陆
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
