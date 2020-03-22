<template>
    <div>
        <written-art 
        @getArtData="submitArtData"
        :wrrittedata="addartdata"></written-art>
    </div>
</template>
<script>
import writtenArt from './writtenart.vue'
import {addArt} from '../../apicontrol/apilist'
export default {
    components:{
        writtenArt,
    },
    activated() {
        
    },
    data() {
        return {
            //添加文章数据
            addartdata:{
                title:'',
                stitle:'',
                descs:'',
                author:'TANGJIE',
                cate_id:'',
                tag_id:'',
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
            //console.log(e,'测试')
            let that = this;
            addArt(e).then(res=>{
                that.$message.success(res.message);
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>