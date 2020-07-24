<style lang="less">

</style>
<template>
    <div>
        <page-header
            style="border-bottom: 1px solid rgb(235, 237, 240)"
            title="系统管理员管理"
            sub-title="系统管理员列表"
        />
         <a-table :columns="columns" :data-source="data" rowKey="id">
            <span slot="time" slot-scope="text">
                {{timeFormat(text)}}
            </span>
            <span slot="action" slot-scope="text, record">
                <a style="color:#1890ff" href="javascript:;" @click="addAdmin(record)">新增</a>
                <a-divider type="vertical" />
                <a style="color:#ff4d4f" href="javascript:;" @click="deleteAdmin(record)">删除</a>
            </span>
        </a-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { PageHeader } from 'ant-design-vue';
import moment from 'moment';
import { getAdminList } from '../../../cgictrl/adminapi'
const columns = [
    {
        title:'Id',
        dataIndex: 'id',
    },
    {
        title: '管理员账号/昵称',
        dataIndex: 'adminname',
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
    data(){
        return{
            columns,
            data:[]
        }
    },
    created(){
        getAdminList().then((res:any)=>{
            let data = res.data?res.data:res;
            this.data = data;
        })
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
        }
    }
})
</script>
