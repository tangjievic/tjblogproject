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
                <a style="color:#1890ff" href="javascript:;" @click="addAdmin">新增</a>
                <a-divider type="vertical" />
                <a-popconfirm
                    title="确定删除？"
                    ok-text="确认"
                    cancel-text="取消"
                    @confirm="deleteAdmin(record)"
                >
                    <a style="color:#ff4d4f" href="javascript:;">删除</a>
                </a-popconfirm>
            </span>
        </a-table>

        <a-modal v-model="addadmin_show" title="管理员添加">
            <template slot="footer">
                <a-button key="back" @click="addCancel">取消添加</a-button>
                <a-button key="submit" type="primary" :loading="add_loading" @click="addSubmit">
                    确认添加
                </a-button>
            </template>
            <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-form-item label="管理员账户">
                    <a-input
                        v-decorator="['username', { rules: [{ required: true, message: '该值不能为空!' }] }]"
                    />
                </a-form-item>
                 <a-form-item label="登录密码">
                    <a-input
                        v-decorator="['password', { rules: [{ required: true, message: '该值不能为空!' }] }]"
                    />
                </a-form-item>
                 <a-form-item label="密码验证">
                    <a-input
                        v-decorator="['c_password', { rules: [{ required: true, message: '该值不能为空!' }] }]"
                    />
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { PageHeader } from 'ant-design-vue';
import moment from 'moment';
import { getAdminList,addAdmin,deletAdmin } from '../../../cgictrl/adminapi'
const columns = [
    {
        title:'Id',
        dataIndex: 'id',
    },
    {
        title: '管理员账号/昵称',
        dataIndex: 'username',
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
            data:[],
            addadmin_show:false,
            add_loading:false,
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
        }
    },
    created(){
        this.getAdminList()
    },
    methods:{
        getAdminList(){
            getAdminList().then((res:any)=>{
                let data = res.data?res.data:res;
                this.data = data;
            })
        },
        addAdmin(){
            this.addadmin_show = true
        },
        addCancel(){
            this.addadmin_show = false
        },
        deleteAdmin(record:any){
            console.log(record)
            deletAdmin({
                username:record.username
            }).then((res:any)=>{
                if(res.code === 20001){
                    this.$message.success("删除成功");
                    this.getAdminList()
                }
            })
        },
        timeFormat(time:number|string){
            return moment(Number(time)*1000).format('YYYY/MM/DD')
        },
        addSubmit(e:any){
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    if(values.password !== values.c_password){
                        this.$message.error('前后密码输入不一致，验证失败');
                    }else{
                        addAdmin({
                            username:values.username,
                            password:values.password
                        }).then((res:any)=>{
                            console.log(res)
                            if(res.code === 20001){
                                this.$message.success("添加管理员成功")
                                this.addadmin_show = false
                                this.getAdminList()
                            }
                        })
                    }
                }
            });
        },
    }
})
</script>
