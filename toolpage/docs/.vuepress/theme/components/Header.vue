<style>
.wet-nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #323232;
  z-index: 100;
}

.wet-nav_logo {
  flex: 0 1 200px;
  padding-left: 60px;
}

.wet-nav_box {
  flex: 1;
  background-color: #ffffff;
  text-align: right;
}

.wet-nav_inner {
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.wet-nav_inner .wet-logo_title {
  height: 70px;
  line-height: 70px;
  font-size: 22px;
  padding: 0 30px;
}

.wet-nav_logo,
.wet-nav_box {
  height: 100%;
}

.wet-nav_list {
  position: relative;
}

.wet-nav_seach:hover .icon_search {
  color: #5ac2e7;
}

.wet-nav .nav_panel .index .item {
  float: left;
  font-size: 14px;
  padding: 15px;
}

.wet-nav .nav_panel .index .item:first-child {
  padding-left: 0;
}

.wet-nav .nav_panel .item.actived,
.wet-nav .nav_panel .item:hover {
  color: #5ac2e7;
}
.wet-nav_list{
    display:inline-block;
}
.wet-nav_list .nav_box_thread {
  width: 20px;
  height: 0;
  border-top: 4px solid #5ac2e7;
  position: absolute;
  top: 0;
  transition: left 0.2s linear, width 0.2s linear;
}

.wet-nav_list::after {
  content: "";
  display: table;
  clear: both;
}

.wet-nav_list .wet-nav_item {
  float: left;
  position: relative;
}

.wet-nav_list .wet-nav_item .nav_sub {
  display: none;
  text-align: center;
  font-size: 14px;
  position: absolute;
  left: -5px;
  min-width: 130%;
  background-color: #ffffff;
  top: 60px;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.wet-nav_list .wet-nav_item:hover .nav_sub {
  display: block;
  /* opacity: 0; */
  animation: WetfadeInDown 0.1s 0.2s ease both;
  -webkit-animation: WetfadeInDown 0.1s 0.2s ease both;
  -moz-animation: WetfadeInDown 0.1s 0.2s ease both;
}

.wet-nav_list .wet-nav_item .sub_item a {
  color: #7a8e9d;
  padding: 8px 15px;
  display: block;
  white-space: nowrap;
}

.wet-nav_list .wet-nav_item .sub_item:hover > a {
  color: rgb(90, 194, 231, 0.8);
}

.wet-nav_list .wet-nav_item .sub_item .actived {
  color: rgb(90, 194, 231, 0.8);
}

.wet-nav_list .wet-nav_item:hover > a {
  color: #5ac2e7;
}

.wet-nav_list .wet-nav_item > a {
  text-align: center;
  font-size: 14px;
  color: #555151;
  display: block;
  height: 70px;
  line-height: 70px;
  padding: 0 15px;
}

.wet-nav_list .wet-nav_item .nav_panel {
  padding: 15px;
  min-height: 100px;
  position: absolute;
  left: -400px;
  right: -50px;
  top: 60px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: none;
}

.wet-nav_list .wet-nav_item:hover .nav_panel {
  display: block;
  /* opacity: 0; */
  animation: WetfadeInDown 0.1s 0.2s ease both;
  -webkit-animation: WetfadeInDown 0.1s 0.2s ease both;
  -moz-animation: WetfadeInDown 0.1s 0.2s ease both;
}

.wet-nav_gologin > .login_text {
  color: #5ac2e7;
  position: relative;
  top: 3px;
}

/* 移动端模式 此部分用作移动端组件参考 */

.wet-mnav {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  height: 1.2rem;
  background-color: #ffffff;
  color: #464242;
  /* align-items: center;
    text-align: center; */
}

.wet-mnav .back {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2rem;
  vertical-align: middle;
  display: table-cell;
}

/* 移动端下划线一般设计 */

.wet-mnav::after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e2e2e2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

.wet-mnav .title {
  font-size: 0.43rem;
  text-align: center;
  height: 1.2rem;
  line-height: 1.2rem;
  width: 100%;
}

.wet-mnav .icon-back {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  top: 50%;
  margin-top: -0.25rem;
  left: 0.2rem;
}
</style>
<template>
    <header class="wet-nav wet-bgcolor__default">
      <div class="wet-nav_inner">
        <div class="wet-nav_logo wet-row">
          <div class="wet-col-xs-12">
            <span class="wet-logo_title">WET-UI</span>
          </div>
        </div>
        <nav class="wet-nav_box">
          <ul class="wet-nav_list page_topnav" data-activeidx="0">
            <div class="nav_box_thread"></div>
            <li class="wet-nav_item" v-for="(item,index) in nav_list" :key="index">
                <template  v-if="item.items">
                    <a href="javascript:;">{{item.text}}</a>
                    <ul class="nav_sub">
                        <li class="sub_item" v-for="(its,idx) in item.items">
                            <router-link tag='a' :to="its.link">{{its.text}}</router-link>
                        </li>
                    </ul>
                </template>
                <router-link tag='a' v-else :to="{path:item.link}">{{item.text}}</router-link>
            </li>
            <!-- <li class="wet-nav_item"><a href="javascript:;">欢迎</a></li> -->
            <!-- <li class="wet-nav_item"><a href="javascript:;">作者博客</a></li>
            <li class="wet-nav_item"><a href="#">WeApp组件</a></li> -->
            <!-- <li class="wet-nav_item">
              <router-link tag='a' v-else :to="item.link">{{item.text}}</router-link>
              <ul class="nav_sub">
                <li class="sub_item"><a>PC端组件</a></li>
                <li class="sub_item"><a class="actived">移动端组件</a></li>
              </ul>
            </li> -->
            <!-- <li class="wet-nav_item">
              <a href="#">Vue组件</a>
              <ul class="nav_sub">
                <li class="sub_item"><a>PC端组件</a></li>
                <li class="sub_item"><a class="actived">移动端组件</a></li>
              </ul>
            </li> -->
            <!-- <li class="wet-nav_item">
              <a href="#">React组件</a>
              <ul class="nav_sub">
                <li class="sub_item"><a>PC端组件</a></li>
                <li class="sub_item"><a class="actived">移动端组件</a></li>
              </ul>
            </li> -->
          </ul>
        </nav>
      </div>
    </header>
</template>
<script>
//import HeaderNavList from '../publick/nav.js'
var HeaderNavList = require('../publick/nav.js');
export default {
    data() {
        return {
            nav_list:[]
        }
    },
    created() {
        this.nav_list = HeaderNavList
    },
    mounted(){
        this.$nextTick(()=>{
            let indexNav = (pDom,idx)=>{
            let item_id = idx?idx:$(pDom).data('activeidx')
            let temp= 0;
            let item_position = [];
            let p = $(pDom);
            let thread = $(`${pDom} .nav_box_thread`);
            let nav_item = $(`${pDom} .wet-nav_item`);
            let nav_item_a = $(`${pDom} .wet-nav_item>a`);
            let old_select= null;
            let select_url = '';
            nav_item_a[item_id].style.color = "#5AC2E7"
            nav_item.each((index,element)=>{
                item_position[0] = 0;
                temp = temp + Number($(element).outerWidth(true));
                //console.log(temp)
                item_position[index+1] = Math.round(temp)
                $(element).on('mouseover',()=>{
                    thread[0].style.width = $(element).outerWidth(true) + "px";
                    thread.css({
                        left:item_position[index]+'px'
                    })
                })
            })
            thread[0].style.width = $(nav_item[item_id]).outerWidth(true)+'px';
            thread.css({
                left:item_position[item_id]+'px'
            })
            p.on('mouseout',()=>{
                thread[0].style.width = $(nav_item[item_id]).outerWidth(true)+'px';
                thread.css({
                    left:item_position[item_id]+'px'
                })
            })

            //查找
            $(`${pDom} .nav_panel .item`).each((index,element)=>{
                if(index == 0){
                    $(element).addClass('actived');
                    old_select = $(element);
                    select_url = $(element).data('url');
                }
                $(element).on('click',()=>{
                    old_select.removeClass('actived')
                    $(element).addClass('actived');
                    old_select = $(element);
                    select_url = $(element).data('url');
                })
            })
            $(`${pDom} .nav_panel .wxt-btn`).on('click',()=>{
                let val = $(`${pDom} .nav_panel .input`).val();
                console.log(val)
                //window.open(select_url,'_blank');
            })
        }
        indexNav('.page_topnav')
        })
    }
};
</script>
