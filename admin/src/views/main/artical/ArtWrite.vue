<style lang="less">

</style>
<template>
    <div>
        <!-- <art-write @getArtData="submitArtData" v-bind:wrrittedata="addartdata"></art-write> -->
        <artwrite-elment @getArtData="submitArtData" v-bind:wrrittedata="addartdata"></artwrite-elment>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ArtwriteElment from './ArtwriteElment.vue'
import {addArt,updateArt } from '../../../cgictrl/artapi'
export default Vue.extend({
    components:{
        ArtwriteElment
    },
    data(){
        return{
          addartdata:{},
        }
    },
    created() {
        console.log(this.$route.params)
        if(JSON.stringify(this.$route.params) !== "{}"){
          this.addartdata = this.$route.params
        }else{
          this.addartdata = {
              title:'',
              stitle:'',
              desc:'',
              author:'TANGJIE',
              cate_id:1,
              tag_id:1,
              type:0,
              content:'',
              marktext:'',
              isvip:0,
              islogin:0,
              linkurl:"",
          }
        }
    },
    methods:{
        submitArtData(e:any){
            console.log(e,'测试')
            let that = this;
            if(JSON.stringify(this.$route.params) !== "{}"){
              updateArt(e).then((res:any)=>{
                  that.$message.success(res.message);
                  setTimeout(()=>{
                    this.$router.push({name:'artlist'})
                  },500)
              })
            }else{
              addArt(e).then((res:any)=>{
                  that.$message.success(res.message);
                  setTimeout(()=>{
                    this.$router.push({name:'artlist'})
                  },500)
              })
            }
        }
    }
})
</script>