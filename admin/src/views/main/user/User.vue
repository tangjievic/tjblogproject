<style lang="less">

</style>
<template>
    <div>
        <page-header
            style="border-bottom: 1px solid rgb(235, 237, 240)"
            title="用户管理"
            sub-title="用户列表"
        />
         <a-table :columns="columns" 
         :data-source="data" 
         rowKey="id">
            <span slot="time" slot-scope="text">
                {{timeFormat(text)}}
            </span>
            <span slot="level" slot-scope="text">
                <a-tag
                    :color="text === 1 ? 'volcano' : text === 2?'geekblue' : 'green'"
                >
                    {{text ===1?'vip用户':text === 2?'特权用户':'普通用户'}}
                </a-tag>
            </span>
            <span slot="action" slot-scope="text, record">
                <a style="color:#1890ff" href="javascript:;" @click="addAdmin(record)">编辑</a>
                <a-divider type="vertical" />
                <a style="color:#ff4d4f" href="javascript:;" @click="deleteAdmin(record)">删除</a>
            </span>
        </a-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import moment from 'moment';
import { getUserList } from '../../../cgictrl/userapi';
import { PageHeader } from 'ant-design-vue'
const columns = [
    {
        title:'Id',
        dataIndex: 'id',
    },
    {
        title: '用户账号',
        dataIndex: 'username',
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
        dataIndex:'level',
        scopedSlots:{
            customRender:'level'
        }
    },  
    {
        title: '创建时间',
        dataIndex: 'createtime',
        scopedSlots:{
            customRender:'time'
        }
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
    created(){
        getUserList().then((res:any)=>{
            let data = res.data?res.data:res;
            this.data = data;
        })
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
        },
        timeFormat(time:number|string){
            return moment(Number(time)*1000).format('YYYY/MM/DD')
        },
    }
})
</script>
