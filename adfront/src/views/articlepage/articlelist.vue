<template>
    <div>
        <a-table bordered 
        :scroll="{ x: 1810}"
        :dataSource="artlistdata"
        size="small" 
        :rowKey="record => record.id" 
        :columns="columns">
            <template slot="title">
                <div style="display:flex">
                <div style="flex:1">栏目分类列表</div>
                <div style="flex:1">
                    <a-button style="float:right" size="small" type="primary" @click="addStart('cate')">添加分类</a-button>
                </div>
                </div>
            </template>
            <template slot="operation" slot-scope="text, record">
                <div style="text-align:center">
                    <a-popconfirm
                    title="确认要删除吗?"
                    okText="确认"
                    cancelText="取消"
                    @confirm="() => onDelete(record.key)"
                    >
                    <a-button size="small" style="margin-right:7px;">删除</a-button>
                    </a-popconfirm>
                    <a-button size="small" type="primary" @click="editeStart(record)">编辑</a-button>
                </div>
            </template>
        </a-table>
    </div>
</template>
<script>
import {getArtlist} from '../../apicontrol/apilist'
export default {
    data() {
        return {
            columns: [
                {
                    title: "ID",
                    dataIndex: "id",
                    fixed: 'left',
                    width:50,
                //scopedSlots: { customRender: "name" }
                },
                {
                    title: "文章标题",
                    dataIndex: "title",
                    width:150,
                },
                {
                    title: "文章所属",
                    dataIndex: "cate_id",
                    width:80,
                },
                {
                    title: "文章标签",
                    dataIndex: "tag_id",
                    width:80,
                },
                {
                    title: "栏目简介",
                    dataIndex: "descs",
                    width:200,
                },
                {
                    title: "文章作者",
                    dataIndex: "author",
                    width:80,
                },
                {
                    title: "赞数",
                    dataIndex: "zan",
                    width:80,
                },
                {
                    title: "游览量",
                    dataIndex: "seenum",
                    width:80,
                },
                {
                    title: "收藏量",
                    dataIndex: "cllector",
                    width:50,
                },
                {
                    title: "文章类型",
                    dataIndex: "type",
                    width:80,
                },
                {
                    title: "文章模板路径",
                    dataIndex: "path",
                    width:150,
                },
                {
                    title: "示例链接",
                    dataIndex: "link_url",
                    width:100,
                },
                {
                    title:"更新日期",
                    dataIndex:'updata_time',
                    width:100,
                },
                {
                    title: "创作日期",
                    dataIndex: "cretatime",
                    width:100,
                },
                {
                    title:"是否启用",
                    dataIndex:"is_delete",
                    width:80,
                },
                {
                    title: "是否推荐",
                    dataIndex: "is_recomon",
                    with:100
                },
                {
                    title: "是否VIP文章",
                    dataIndex: "is_vip",
                    width:100,
                },
                {
                title: "操作",
                    dataIndex: "operation",
                    scopedSlots: { customRender: "operation" },
                    width:150,
                    fixed:'right'
                }
            ],
            artlistdata:[],
        }
    },

    activated() {
        this.getArtLists();
    },

    methods: {
        getArtLists(){
            getArtlist().then(res=>{
                this.artlistdata = res.data;
            })
        },
        editeStart(record){
            //console.log(record)
            this.$router.push({
                name:'editeart',
                params:{record},
            })
        }
    },
}
</script>
<style lang="less" scoped>

</style>