<style lang="less">

</style>
<template>
    <div>
        <page-header
            style="border-bottom: 1px solid rgb(235, 237, 240)"
            title="用户管理"
            sub-title="用户列表"
        />
         <a-table :columns="columns" :data-source="data">
            <!-- <a slot="name" slot-scope="text">{{ text }}</a>
            <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
            <span slot="tags" slot-scope="tags">
            <a-tag
                v-for="tag in tags"
                :key="tag"
                :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
            >
                {{ tag.toUpperCase() }}
            </a-tag>
            </span>
            <span slot="action" slot-scope="text, record">
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
            </span> -->
            <span slot="action" slot-scope="text, record">
                <a href="javascript:;" @click="addAdmin(record)"></a>
                <a-divider type="vertical" />
                <a href="javascript:;" @click="deleteAdmin(record)">删除</a>
            </span>
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
    },
    {
        title: '用户账号',
        dataIndex: 'adminname',
    },
    {
        title: "用户昵称",
        dataIndex:'nickname'
    },
    {
        title:'用户邮箱',
        dataIndex:'email'
    },
    {
        title:"用户类别",
        dataIndex:'type'
    },
    {
        title: '创建时间',
        dataIndex: 'createtime',
    },
    {
        title: '操作',
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
    methods:{
        addAdmin(record:any){
            console.log(record)
        },
        deleteAdmin(record:any){
            console.log(record)
        }
    }
})
</script>
