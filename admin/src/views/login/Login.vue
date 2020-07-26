<script lang="ts">
import Login from './login';
export default Login 
</script>

<template>
    <login-layout>
        <login-form @getLoginData="subData"></login-form>
    </login-layout>
</template>
