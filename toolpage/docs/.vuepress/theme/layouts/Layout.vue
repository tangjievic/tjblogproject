<style>
.theme-container{
    height: 100vh;
}
.content_div{
    margin-left: 290px;
    padding-right: 20px;
    padding-top: 90px;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: auto;
}
.content_div>.main{
    flex:1 0 auto;
    background-color: #ffffff;
    padding: 20px;
}
.content_div .content_footer{
    flex: 0 0 auto;
    text-align: center;
    padding: 20px;
}
</style>

<template>
  <div class="theme-container">
        <header-nav></header-nav>
        <slider-nav></slider-nav>
        <div class="content_div">
            <div class="main">
                <Content/>
            </div>
            <footer class="content_footer">
                wetui
            </footer>
        </div>
  </div>
</template>
<script>
import HeaderNav from '../components/Header.vue';
import SliderNav from '../components/SliderNav.vue';
export default {
    components:{
        HeaderNav,
        SliderNav
    }
}
</script>
