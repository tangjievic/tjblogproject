<style lang="less" scoped>
.table_warrap{
    overflow: auto;
    height: 100%;
}
.cate_wrapper{
    padding:0 10%;
    .input_line{
        display: flex;
        margin-bottom: 7px;
        .btn_div{
            width: 100%;
            text-align: right;
        }
    }
    .label_name{
        height:32px;
        line-height: 32px;
        font-weight: 500;
        flex: 0 0 200px;
    }
}
.edite_cate{
    padding:0 10%;
    .input_line{
        display: flex;
        margin-bottom: 7px;
    }
    .label_name{
        height:32px;
        line-height: 32px;
        font-weight: 500;
        flex: 0 0 100px;
    }
}
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
                <a-table :columns="cate_columns" rowKey="id" :data-source="cate_data" bordered>
                    <span slot="action" slot-scope="text, record">
                        <a style="color:#1890ff" href="javascript:;" @click="editeStart(record,'cate')">编辑</a>
                        <a-divider type="vertical" />
                        <a style="color:#ff4d4f" href="javascript:;" @click="deleteEvent(record)">删除</a>
                    </span>
                    <span slot="pid" slot-scope="text">
                        {{getCateName(text)}}
                    </span>
                    <template slot="title">
                        <div style="height:32px;line-height:32px">
                            <span>分类列表</span>
                            <a-button type="primary" style="float:right" @click="addStart('cate')">
                                添加分类
                            </a-button>
                        </div>
                    </template>
                </a-table>
            </a-tab-pane>
            <a-tab-pane key="2" tab="博文标签列表">
                <a-table :columns="tag_columns" rowKey="id" :data-source="tag_data" bordered>
                    <span slot="action" slot-scope="text, record">
                        <a style="color:#1890ff" href="javascript:;" @click="editeStart(record,'tags')">编辑</a>
                        <a-divider type="vertical" />
                        <a style="color:#ff4d4f" href="javascript:;" @click="deleteEvent(record)">删除</a>
                    </span>
                    <template slot="title">
                        <div style="height:32px;line-height:32px">
                            <span>标签列表</span>
                            <a-button type="primary" style="float:right" @click="addStart('tags')">
                                添加标签
                            </a-button>
                        </div>
                    </template>
                </a-table>
            </a-tab-pane>
        </a-tabs>

        <a-modal v-model="edite_visible" :title="modaltitle">
            <template slot="footer">
                <a-button key="back" @click="editeCancel">取消</a-button>
                <a-button key="submit" type="primary" :loading="edite_loading" @click="dataSubmit('cate')">
                    确认
                </a-button>
            </template>
            <form class="edite_cate">
                <div class="input_line">
                    <label class="label_name">栏目名称:</label>
                    <a-input placeholder="栏目名称" v-model="edite_cate_data.catename" />
                </div>
                <div class="input_line">
                    <label class="label_name">父级id(栏目):</label>
                    <a-input placeholder="0" disabled v-model="edite_cate_data.pid" />
                    <a-select 
                    v-model="edite_cate_data.pid" 
                    style="margin-left:7px;width:300px">
                        <a-select-option :value="0" title="顶级栏目">顶级栏目</a-select-option>
                        <a-select-option :value="item.id" :title="item.catename" v-for="item in catelistdata" :key="item.id">{{item.catename}}</a-select-option>
                    </a-select>
                </div>
            </form>
        </a-modal>

        <a-modal v-model="edite_visibles" :title="modaltitle">
            <template slot="footer">
                <a-button key="back" @click="editeCancel">取消</a-button>
                <a-button key="submit" type="primary" :loading="edite_loadings" @click="dataSubmit('tag')">
                    确认
                </a-button>
            </template>
            <form class="edite_cate">
                <div class="input_line">
                    <label class="label_name">标记名称:</label>
                    <a-input placeholder="标记名称" v-model="edite_tags_data.tagname" />
                </div>
            </form>
        </a-modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapMutations,mapState} from 'vuex'
import { getCate,getTags,updateCate,addCate,updataTags,addTags} from '../../../cgictrl/catetagapi';
import { PageHeader } from 'ant-design-vue'

const cate_columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: '分类名称',
        dataIndex: 'catename',
    },
    {
        title: '栏目所属',
        dataIndex: 'pid',
        scopedSlots:{
            customRender:'pid'
        }
    },
    {
        title: '操作',
        scopedSlots: { customRender: 'action' },
    },
];
const tag_columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: '标签名称',
        dataIndex: 'tagname',
    },
    {
        title: '操作',
        scopedSlots: { customRender: 'action' },
    },
]
export default Vue.extend({
    components:{
        PageHeader,
    },
    data(){
        return{
            is_add:false,
            modaltitle:'',
            cate_columns,
            cate_data:[],
            tag_columns,
            tag_data:[],
            edite_loading: false,
            edite_loadings:false,
            edite_visible: false,
            edite_visibles:false,
            edite_cate_data:{
                catename:'',
                pid:0
            },
            edite_tags_data:{
                tagname:''
            },
            //catelistdata: [],
            //tagdatalist:[],
        }
    },
    created(){
        if(!this.catelistdata||this.catelistdata.length === 0){
            this.getCate();
        }else{
            this.cate_data = this.catelistdata
        }
        if(!this.tagdatalist||this.tagdatalist.length === 0){
            this.getTag();
        }else{
             this.tag_data = this.tagdatalist
        }
    },
    computed:{
        ...mapState({
            catelistdata:(state:any)=>state.catetag.catelist,
            tagdatalist:(state:any)=>state.catetag.taglist
        })
	},
    methods:{
        ...mapMutations({
            setCateList:'catetag/setCateList',
            setTagList:"catetag/setTagList"
		}),
        getCate(){
            getCate().then((res:any)=>{
                this.cate_data = res.data;
                this.setCateList(res.data);
            })
        },
        getTag(){
            getTags().then((res:any)=>{
                this.tag_data = res.data;
                this.setTagList(res.data);
            })
        },
        callback(key:number|string) {
           // console.log(key);
        },
        //编辑开始
        editeStart(data:any,type:string="cate"){
            this.is_add = false
            if(type=="tags"){
                this.modaltitle = '标签修改'
                this.edite_visibles = true
                this.edite_tags_data = data
            }else{
                this.modaltitle = '栏目修改'
                this.edite_visible = true;
                this.edite_cate_data = data
            }
        },
        addStart(type:string="cate"){
            this.is_add = true
            if(type=="tags"){
                this.modaltitle = '标签添加'
                this.edite_visibles = true
                this.edite_tags_data = {
                    tagname:''
                };
            }else{
                this.modaltitle = '栏目添加'
                this.edite_visible = true;
                this.edite_cate_data = {
                    catename:'',
                    pid:0
                };
            }
        },
            //栏目编辑提交
        async dataSubmit(type:string='cate'){
            let that = this;
            if( type === 'cate' ){
                this.edite_loading = true;
                if(this.is_add){
                    //console.log('xx')
                    addCate(this.edite_cate_data).then((res:any)=>{
                        this.edite_loading = false;
                        this.edite_visible = false;
                        this.$message.success(res.message);
                        this.getCate();
                    })
                }else{
                    updateCate(this.edite_cate_data).then((res:any)=>{
                        this.edite_loading = false;
                        this.edite_visible = false;
                        this.$message.success(res.message);
                        this.getCate();
                    })
                }
            }else{
                this.edite_loadings = true
                if(this.is_add){
                    addTags(this.edite_tags_data).then((res:any)=>{
                        this.edite_loadings = false
                        this.edite_visibles = false
                        this.$message.success(res.message);
                        this.getTag();
                    })
                }else{
                    updataTags(this.edite_tags_data).then((res:any)=>{
                        this.edite_loadings = false
                        this.edite_visibles = false
                        this.$message.success(res.message);
                        this.getTag();
                    })
                }
            }
        },
        editeCancel(){
            this.edite_loading = false
            this.edite_loadings = false
            this.edite_visible = false
            this.edite_visibles = false
        },
        deleteEvent(){

        },
        getCateName(pid:number){
            let catename = ''
            this.catelistdata.forEach((item:any)=>{
                if(item.id === pid){
                   catename = item.catename
                   return
                }
                if(pid === 0){
                    catename = '顶级栏目'
                    return
                }
            })
            return catename;
        }
    }
})
</script>
