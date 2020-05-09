<template>
    <a-tabs type="card" :activeKey ="tabkey" @change="changeTbas">
        <a-tab-pane tab="栏目列表" key="1">
            <div class="table_warrap">
                <a-table bordered 
                :dataSource="catelistdata"
                size="small" 
                :rowKey="record => record.id" 
                :columns="columns">
                    <template slot="title">
                        <div style="display:flex">
                        <div style="flex:1">栏目分类列表</div>
                        <div style="flex:1">
                            <a-button style="float:right" size="small" type="primary" @click="addStart('cate')">添加分类</a-button>
                        </div>
                        </div>
                    </template>
                    <template slot="operation" slot-scope="text, record">
                        <div style="text-align:center">
                            <a-popconfirm
                            title="确认要删除吗?"
                            okText="确认"
                            cancelText="取消"
                            @confirm="() => onDelete(record.key)"
                            >
                            <a-button size="small" style="margin-right:7px;">删除</a-button>
                            </a-popconfirm>
                            <a-button size="small" type="primary" @click="editeStart(record)">编辑</a-button>
                        </div>
                    </template>
                </a-table>
                <a-modal v-model="edite_visible" title="栏目修改" onOk="editeSubmit">
                    <template slot="footer">
                        <a-button key="back" @click="editeCancel">取消修改</a-button>
                        <a-button key="submit" type="primary" :loading="edite_loading" @click="editeSubmit">
                            确认修改
                        </a-button>
                    </template>
                    <form class="edite_cate">
                        <div class="input_line">
                            <label class="label_name">栏目名称:</label>
                            <a-input placeholder="栏目名称" v-model="edite_cate_data.catename" />
                        </div>
                        <div class="input_line">
                            <label class="label_name">栏目简介:</label>
                            <a-input placeholder="栏目简介" v-model="edite_cate_data.descs"/>
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
                        <div class="input_line">
                            <label class="label_name">栏目列表地址:</label>
                            <a-input placeholder="栏目列表地址" v-model="edite_cate_data.path" />
                        </div>
                    </form>
                </a-modal>
            </div>
        </a-tab-pane>
        <a-tab-pane tab="栏目添加" key="2">
            <form class="cate_wrapper">
                <div class="input_line">
                    <label class="label_name">栏目名称:</label>
                    <a-input placeholder="栏目名称" v-model="catedata.catename" />
                </div>
                <div class="input_line">
                    <label class="label_name">栏目简介:</label>
                    <a-input placeholder="栏目简介" v-model="catedata.descs"/>
                </div>
                <div class="input_line">
                    <label class="label_name">父级id(栏目):</label>
                    <a-input placeholder="0" disabled v-model="catedata.pid" />
                    <a-select v-model="catedata.pid" defaultValue="0" style="margin-left:7px;width:300px">
                        <a-select-option :value="`0`" title="顶级栏目">顶级栏目</a-select-option>
                        <a-select-option :value="item.id" :title="item.catename" v-for="item in seletcatelist" :key="item.id">{{item.catename}}</a-select-option>
                    </a-select>
                </div>
                <div class="input_line">
                    <label class="label_name">栏目列表地址:</label>
                    <a-input placeholder="栏目列表地址" v-model="catedata.path" />
                </div>
                <div class="input_line">
                    <div class="btn_div">
                        <a-button type="primary" style="margin-right:7px;" @click="addCate">提交数据</a-button>
                        <a-button @click="resetData(catedata)">重置数据</a-button>
                    </div>
                </div>
            </form>
        </a-tab-pane>
        <a-tab-pane tab="文章标记类列表" key="3">
            <a-table bordered 
                :dataSource="tagdatalist"
                size="small" 
                :rowKey="record => record.id" 
                :columns="tagscolumns">
                    <template slot="title">
                        <div style="display:flex">
                        <div style="flex:1">TAGS分类列表</div>
                        <div style="flex:1">
                            <a-button style="float:right" size="small" type="primary" @click="addStart('tags')">添加分类</a-button>
                        </div>
                        </div>
                    </template>
                    <template slot="operation" slot-scope="text, record">
                        <div style="text-align:center">
                            <a-popconfirm
                            title="确认要删除吗?"
                            okText="确认"
                            cancelText="取消"
                            @confirm="() => onDelete(record.key)"
                            >
                            <a-button size="small" style="margin-right:7px;">删除</a-button>
                            </a-popconfirm>
                            <a-button size="small" type="primary" @click="editeStart(record,'tags')">编辑</a-button>
                        </div>
                    </template>
            </a-table>
            <a-modal v-model="edite_visibles" title="tag修改" onOk="editeTagSubmit">
                <template slot="footer">
                    <a-button key="back" @click="editeCancel">取消修改</a-button>
                    <a-button key="submit" type="primary" :loading="edite_loadings" @click="editeTagSubmit">
                        确认修改
                    </a-button>
                </template>
                <form class="edite_cate">
                    <div class="input_line">
                        <label class="label_name">标记名称:</label>
                        <a-input placeholder="标记名称" v-model="edite_tags_data.tagname" />
                    </div>
                </form>
            </a-modal>
        </a-tab-pane>
        <a-tab-pane tab="文章标记类添加" key="4">
            <form class="cate_wrapper">
                <div class="input_line">
                    <label class="label_name">标记名称:</label>
                    <a-input placeholder="标记名称" v-model="tagdata.tagname" />
                </div>
                <div class="input_line">
                    <div class="btn_div">
                        <a-button type="primary" style="margin-right:7px;" @click="addTags">提交数据</a-button>
                        <a-button @click="resetData(tagdata)">重置数据</a-button>
                    </div>
                </div>
            </form>
        </a-tab-pane>
    </a-tabs>
</template>
<script>
import {getCate,addCate,updateCate,addTags,getTagsList,updataTags} from '../../apicontrol/apilist.js'
export default {
  data() {
    return {
        edite_loading: false,
        edite_loadings:false,
        edite_visible: false,
        edite_visibles:false,
        edite_cate_data:{
            catename:'',
            path:'',
            descs:'',
            pid:''
        },
        catelistdata: [],
        seletcatelist:[],
        tagdatalist:[],
        tagscolumns:[
            {
                title: "ID",
                dataIndex: "id",
            },
            {
                title: "栏目名称",
                dataIndex: "tagname"
            },
            {
                title: "操作",
                dataIndex: "operation",
                scopedSlots: { customRender: "operation" }
            }
        ],
        columns: [
            {
                title: "ID",
                dataIndex: "id",
            //scopedSlots: { customRender: "name" }
            },
            {
                title: "栏目名称",
                dataIndex: "catename"
            },
            {
                title: "栏目所属",
                dataIndex: "pid"
            },
            {
                title: "栏目简介",
                dataIndex: "descs"
            },
            {
                title: "栏目所配地址",
                dataIndex: "path"
            },
            {
                title:"是否启用",
                dataIndex:"is_delete",
            },
            {
            title: "操作",
                dataIndex: "operation",
                scopedSlots: { customRender: "operation" }
            }
        ],
        catedata:{
            catename:'',
            path:"",
            descs:"",
            pid:"0",
        },
        tagdata:{
            tagname:''
        },
        edite_tags_data:{
            tagname:""
        },
        tabkey:"1",
    };
  },
  created() {
      this.getCateList();
      this.getTagsList();
      this.test();
  },
  methods: {
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    //添加数据行为
    addStart(type){
        switch (type) {
            case 'cate':
                this.tabkey = "2"
                break;
            case 'tags':
                this.tabkey = "4"
                break;
            default:
                this.tabkey = "1"
                break;
        }
    },
    addCate() {
        let that = this;
        addCate(this.catedata).then(res=>{
            that.$message.success(res.message);
        })
    },
    addTags(){
        let that = this;
        addTags(this.tagdata).then(res=>{
            that.$message.success(res.message);
        })
    },
    resetData(data){
        for(let item in data){
            data[item] = ""
        }
    },
    getCateList(){
        getCate().then(res=>{
            let temp = [];
            this.catelistdata = res.data
            res.data.forEach(item=>{
                if(item.pid ==0){
                    temp.push(item)
                }
            })
            this.seletcatelist = temp;
        })
    },
    getTagsList(){
        getTagsList().then(res=>{
            this.tagdatalist = res.data;
        })
    },
    //栏目编辑取消
    editeCancel(){

    },
    //编辑开始
    editeStart(data,type="cate"){
        if(type=="tags"){
            this.edite_visibles = true
            this.edite_tags_data = data;
        }else{
            this.edite_visible = true;
            this.edite_cate_data = data;
        }
    },
    //栏目编辑提交
    async editeSubmit(){
        let that = this;
        this.edite_loading = true;
        await setTimeout(() => {
          this.edite_loading = false;
          this.edite_visible = false;
        }, 2000);
        updateCate(this.edite_cate_data).then(res=>{
            that.$message.success(res.message);
        })
    },
    async editeTagSubmit(){
        let that = this;
        this.edite_loadings = true;
        await setTimeout(()=>{
            this.edite_loadings = false;
            this.edite_visibles = false
        },2000);
        updataTags(this.edite_tags_data).then(res=>{
            that.$message.success(res.message);
        })
    },
    //tabs改变
    changeTbas(key){
        this.tabkey = key;
    },
    test(){
        
    }
  }
};
</script>
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