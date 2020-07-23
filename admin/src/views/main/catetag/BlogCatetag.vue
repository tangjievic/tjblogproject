<style lang="less">

</style>

<template>
    <div>
        <page-header
            style="border-bottom: 1px solid rgb(235, 237, 240)"
            title="博文分类/标记"
            sub-title="博文世界"
        />
        <a-tabs type="card" @change="callback" style="margin-top:20px">
            <a-tab-pane key="1" tab="博文分类列表">
                <a-table :columns="cate_columns" :data-source="cate_data" bordered>
                    <span slot="action" slot-scope="text, record">
                        <a href="javascript:;" @click="editBlogCate(record)">编辑</a>
                        <a-divider type="vertical" />
                        <a href="javascript:;" @click="deleteBlogCate(record)">删除</a>
                    </span>
                    <template slot="title">
                        <div style="height:32px;line-height:32px">
                            <span>分类列表</span>
                            <a-button type="primary" style="float:right">
                                添加分类
                            </a-button>
                        </div>
                    </template>
                </a-table>
            </a-tab-pane>
            <a-tab-pane key="2" tab="博文标签列表">
                <a-table :columns="cate_columns" :data-source="cate_data" bordered>
                    <span slot="action" slot-scope="text, record">
                        <a href="javascript:;" @click="editBlogTag(record)">编辑</a>
                        <a-divider type="vertical" />
                        <a href="javascript:;" @click="deleteBlogTag(record)">删除</a>
                    </span>
                    <template slot="title">
                        <div style="height:32px;line-height:32px">
                            <span>标签列表</span>
                            <a-button type="primary" style="float:right">
                                添加标签
                            </a-button>
                        </div>
                    </template>
                </a-table>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PageHeader } from 'ant-design-vue'
const cate_columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key:'id'
    },
    {
        title: '分类名称',
        dataIndex: 'blog_catename',
    },
    {
        title: '栏目所属',
        dataIndex: 'pcatename',
    },
    {
        title:'创建时间',
        dataIndex:'createtime'
    },
    {
        title: '操作',
        scopedSlots: { customRender: 'action' },
    },
];
export default Vue.extend({
    components:{
        PageHeader,
    },
    data(){
        return{
            cate_columns,
            cate_data:[],
        }
    },
    methods:{
        callback(key:number|string) {
            console.log(key);
        },
        editBlogCate(){

        },
        deleteBlogCate(){

        },
        editBlogTag(){

        },
        deleteBlogTag(){
            
        }
    }
})
</script>
