<style lang="less">

</style>

<template>
    <div>
        <page-header
            style="border-bottom: 1px solid rgb(235, 237, 240)"
            title="文章列表"
            sub-title="博文一点通"
        />

        <a-table :columns="columns" :data-source="data" :scroll="{ x: 2210}" rowKey="id">
            <span slot="action" slot-scope="text, record">
                <a style="color:#1890ff" href="javascript:;" @click="editeArt(record)">编辑</a>
                <a-divider type="vertical" />
                <a style="color:#ff4d4f" href="javascript:;" @click="deleteArt(record)">删除</a>
            </span>
            <span slot="cate_id" slot-scope="text">
                {{getCateName(text)}}
            </span>
            <span slot="tag_id" slot-scope="text">
                {{getTagName(text)}}
            </span>
            <span slot="type" slot-scope="text">
                 <a-tag
                    :color="getType(text).color"
                >
                    {{ getType(text).name }}
                </a-tag>
            </span>
            <span slot="isvip" slot-scope="text">
                {{ text === 0?'否':'是'}}
            </span>
            <span slot="islogin" slot-scope="text">
                {{ text === 0?'否':'是'}}
            </span>
            <template slot="title">
                <div style="height:32px;line-height:32px">
                    <span>文章列表</span>
                    <a-button type="primary" style="float:right"  @click="addArt">
                        添加文章
                    </a-button>
                </div>
            </template>
        </a-table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { getArtlist } from '../../../cgictrl/artapi'
import { PageHeader } from 'ant-design-vue'
import moment from 'moment';
const columns = [
    {
        title:'Id',
        dataIndex: 'id',
        width:100,
    },
    {
        title: '文章标题',
        dataIndex: 'title',
        width:200,
    },
    {
        title: "文章分类",
        dataIndex:'cate_id',
        width:200,
        scopedSlots:{
            customRender:'cate_id'
        }
    },
    {
        title:'标签',
        dataIndex:'tag_id',
        width:200,
        scopedSlots:{
            customRender:'tag_id'
        }
    },
    {
        title:"作者",
        dataIndex:'author',
        width:150,
    },
    {
        title: '赞',
        dataIndex: 'zan',
         width:150,
    },
    {
        title: '游览量',
        dataIndex: 'seenum',
         width:150,
    },
    {
        title: '收藏量',
        dataIndex: 'cllector',
         width:150,
    },
    {
        title: '文章类型',
        dataIndex: 'type',
        width:150,
        scopedSlots:{
            customRender:'type'
        }
    },
    {
        title: '创作日期',
        dataIndex: 'createtime',
        width:200,
    },
    {
        title: '是否vip查看',
        dataIndex: 'isvip',
        width:200,
        scopedSlots:{
            customRender:'isvip'
        }
    },
    {
        title: '是否登陆查看',
        dataIndex: 'islogin',
        width:200,
        scopedSlots:{
            customRender:'islogin'
        }
    },
    {
        title: '操作',
        fixed: 'right',
        width: 160,
        scopedSlots: { customRender: 'action' },
    },
];

export default Vue.extend({
    components:{
        PageHeader
    },
    data(){
        return{
            columns,
            data:[]
        }
    },
    computed:{
        ...mapState({
            catelistdata:(state:any)=>state.catetag.catelist,
            tagdatalist:(state:any)=>state.catetag.taglist
        })
	},
    created(){
        this.getArtlist();
    },
    methods:{
        getArtlist(){
            getArtlist().then((res:any)=>{
                (this as any).data = res.data
            })
        },
        timeFormat(time:number|string){
            return moment(Number(time)*1000).format('YYYY/MM/DD')
        },
        editeArt(data:any){
            this.$router.push({
                name:'artwrite',
                params:data
            })
        },
        addArt(){
            this.$router.push({
                name:'artwrite',
            })
        },
        getCateName(pid:number){
            let catename = ''
            this.catelistdata.forEach((item:any)=>{
                if(item.id === pid){
                   catename = item.catename
                   return
                }
                if(pid === 0){
                    catename = '顶级栏目'
                    return
                }
            })
            return catename;
        },
        getTagName(tid:number){
            let tagname = ''
            this.tagdatalist.forEach((item:any)=>{
                if(item.id === tid){
                   tagname = item.tagname
                   return
                }
            })
            return tagname;
        },
        getType(type:number){
            let name = ''
            let color = ''
            switch(type){
                case 0:
                    name = "原创";
                    color= 'pink';
                    break;
                case 1:
                    name = "转载";
                    color = 'red';
                    break;
                case 2:
                    name = "教程";
                    color = 'orange';
                    break;
                case 3:
                    name = '杂谈';
                    color = 'cyan';
                    break;
            }
            return {
                name,
                color
            }
        }
    }
})
</script>
