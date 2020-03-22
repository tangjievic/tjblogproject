<template>
    <div>
        <a-table 
        :columns="columns"
        size="small" 
        :pagination="false"
        :dataSource="adminlist_data"
        :rowKey="record => record.id" 
        bordered>
            <template slot="title">
                <div style="display:flex">
                    <div style="flex:1">管理员信息列表</div>
                    <div style="flex:1">
                        <a-button style="float:right" size="small" type="primary">添加管理员</a-button>
                    </div>
                </div>
            </template>
            <template slot="time" slot-scope="text,record">
                {{timeChange(record.createtime)}}
            </template>
            <template slot="footer">
                <a-alert message="系统管理员只允许删除和添加操作，不支持修改接口" banner></a-alert>
            </template>
            <template slot="operation" slot-scope="text,record">
                <a-popconfirm
                title="确认要删除吗?"
                okText="确认"
                cancelText="取消"
                @confirm="() => onDelete(record.id)">
                <a href="javascript:;" style="color:#ff8c00">删除</a>
                </a-popconfirm>
            </template>
        </a-table>
    </div>
</template>
<script>
import {getAdmin} from '../../apicontrol/apilist'
import dataChange from '../../assets/tools/dataChange.js'
export default {
    data() {
        return {
            columns:[
                {
                    title: 'ID',
                    dataIndex: 'id',
                    //scopedSlots: { customRender: 'name' },
                },
                {
                    title: '管理员名',
                    className: 'column-money',
                    dataIndex: 'username',
                },
                {
                    title: '创建时间',
                    dataIndex: 'createtime',
                    scopedSlots:{
                        customRender:"time"
                    }
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    scopedSlots: { customRender: 'operation' },
                }
            ],
            adminlist_data:[]
        }
    },
    created() {
        this.getAdminlist();
    },
    methods: {
        //删除管理员
        onDelete (key) {
            // const dataSource = [...this.dataSource]
            // this.dataSource = dataSource.filter(item => item.key !== key)
            console.log(key);
        },
        //获取管理员列表
        getAdminlist(){
            getAdmin().then(res=>{
                this.adminlist_data = res.data;
            })
        },
        timeChange(timetamp){
            return dataChange.changeTimeTamp(timetamp,"date")
        }
    },

}
</script>
<style lang="less" scoped>
th.column-money,
td.column-money {
    text-align: right !important;
}
</style>