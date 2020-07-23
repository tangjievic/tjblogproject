<style lang="less">

</style>
<template>
    <div>
        <page-header
            style="border-bottom: 1px solid rgb(235, 237, 240)"
            title="系统管理员管理"
            sub-title="系统管理员列表"
        />
         <a-table :columns="columns" :data-source="data">
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
        title: '管理员账号/昵称',
        dataIndex: 'adminname',
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
