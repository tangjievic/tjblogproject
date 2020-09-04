<style>
.silder_nav-box{
    position: fixed;
    z-index: 10;
    width: 270px;
    left: 0;
    bottom: 0;
    top:70px;
    overflow: auto;
    background-color: #ffffff;
    border-right: 1px solid #e6e6e6;
}
.silder_nav-box::before{
    position: absolute;
    content: '';
    display: block;
    z-index: -1;
    width: 70px;
    height: 100%;
    background-color: #5ac2e7;
}
</style>
<template>
    <div class="silder_nav-box">

    </div>
</template>
<script>
export default {
    
}
</script>
