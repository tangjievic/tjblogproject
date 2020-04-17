<style lang="less" scoped>

</style>
<template>
    <div>
        <a-table 
        :columns="columns"
        size="small"
        :dataSource="dataSource"
        :rowKey="record => record.id"
        bordered
        >
            <template slot="operation" slot-scope="text, record">
                <a href="javascript:;" style="color:#ff8c00" @click="recordEvent(record)">正式录入</a>
            </template>
        </a-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            columns:[
                {
                    title: 'ID',
                    dataIndex: 'id'
                },
                {
                    title: '姓名',
                    dataIndex:'name'
                },
                {
                    title:'手机号码',
                    dataIndex:'phone'
                },
                {
                    title:'身份证',
                    dataIndex:'sfz'
                },
                {
                    title:'工作年限',
                    dataIndex:'experience'
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    scopedSlots: { customRender: 'operation' },
                }
            ],
            dataSource:[]
        }
    },

    methods: {
        recordEvent(row){
            console.log(row)
        }
    },
}
</script>