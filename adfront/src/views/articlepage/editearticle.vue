<template>
    <div>
        <written-art 
        @getArtData="submitArtData"
        :wrrittedata="editedata"></written-art>
    </div>
</template>
<script>
import writtenArt from './writtenart.vue'
import {updateArt} from '../../apicontrol/apilist'
export default {
    components:{
        writtenArt,
    },
    activated(){
        if(!this.$route.params||!this.$route.params.record){
           this.$router.back(-1)
           return
        }
        this.editedata = this.recordart
        // console.log(this.$route.params.record,"dfas")
        // Object.assign(this.editedata,this.$route.params.record)
        // console.log(this.editedata)
    },
    computed:{
        recordart(){
            if(this.$route.params){
                return this.$route.params.record?this.$route.params.record:{}
            }else{
                return {}
            }
        }
    },
    data() {
        return {
            //编辑文章数据
            editedata:{
                title:'',
                stitle:'',
                descs:'',
                cate_id:'',
                tag_id:'',
                author:'',
                type:'0',
                content:'',
                marktext:'',
                is_recomon:'0',
                is_vip:'0',
                path:'',
                link_url:"",
            },
        }
    },
    methods:{
        submitArtData(e){
            let that = this;
            updateArt(e).then(res=>{
                that.$message.success(res.message);
                setTimeout(()=>{
                    this.$router.back(-1)
                },1000)
                //this.$router.back(-1)
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>