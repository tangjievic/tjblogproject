<style lang="less">

</style>

<template>
    <div>
        <page-header
            style="border-bottom: 1px solid rgb(235, 237, 240)"
            title="文章列表"
            sub-title="博文一点通"
        />

        <a-table :columns="columns" :data-source="data" :scroll="{ x: 2210}">
            <span slot="action" slot-scope="text, record">
                <a href="javascript:;" @click="addAdmin(record)"></a>
                <a-divider type="vertical" />
                <a href="javascript:;" @click="deleteAdmin(record)">删除</a>
            </span>
            <template slot="title">
                <div style="height:32px;line-height:32px">
                    <span>文章列表</span>
                    <a-button type="primary" style="float:right">
                        添加文章
                    </a-button>
                </div>
            </template>
        </a-table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PageHeader } from 'ant-design-vue'
const columns = [
    {
        title:'Id',
        dataIndex: 'id',
        key: 'id',
        width:100,
    },
    {
        title: '文章标题',
        dataIndex: 'title',
        width:200,
    },
    {
        title: "文章分类",
        dataIndex:'catename',
        width:200,
    },
    {
        title:'标签',
        dataIndex:'tagname',
        width:200,
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
        dataIndex: 'browsenum',
         width:150,
    },
    {
        title: '收藏量',
        dataIndex: 'collectnum',
         width:150,
    },
    {
        title: '文章类型',
        dataIndex: 'type',
         width:150,
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
    },
    {
        title: '是否登陆查看',
        dataIndex: 'islogin',
        width:200,
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
})
</script>
