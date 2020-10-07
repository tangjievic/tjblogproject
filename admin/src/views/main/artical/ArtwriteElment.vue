<template>
  <form class="wrrite_art">
    <page-header
        style="border-bottom: 1px solid rgb(235, 237, 240)"
        title="博文写作"
        sub-title="博文灵感一点通"
    />
    <!-- <div class="header">{{!edit?typetitle[0]:typetitle[1]}}</div> -->
    <div class="wrrite_hd">
      <div class="hd_fiexd">
        <div class="input_line">
          <label class="label_name">文章标题:</label>
          <a-input placeholder="文章标题" v-model="artdata.title" />
        </div>
        <div class="input_line">
          <label class="label_name">文章副标题:</label>
          <a-input placeholder="文章副标题" v-model="artdata.stitle" />
        </div>
        <div class="input_line">
          <label class="label_name">文章作者:</label>
          <a-input placeholder="文章作者" v-model="artdata.author" />
        </div>
        <div class="input_line">
          <label class="label_name">文章所属栏目:</label>
          <a-select v-model="artdata.cate_id" :defaultValue="artdata.cate_id">
            <a-select-option
              :value="Number(item.id)"
              :title="item.catename"
              v-for="item in catelistdata"
              v-show="item.pid!==0"
              :key="item.id"
            >{{item.catename}}</a-select-option>
          </a-select>
        </div>
        <div class="input_line">
          <label class="label_name">是否登录查看:</label>
          <a-radio-group
            style="padding: 5px 0 0 0;"
            :options="is_login"
            v-model="artdata.islogin"
            @change="onChangeLogin"
          />
        </div>
      </div>
      <div class="hd_fiexd">
        <div class="input_line">
          <label class="label_name">是否是vip文章:</label>
          <a-radio-group
            style="padding: 5px 0 0 0;"
            :options="is_vip"
            v-model="artdata.isvip"
            @change="onChangeVip"
          />
        </div>
        <div class="input_line">
          <label class="label_name">文章类型:</label>
          <a-radio-group
            style="padding: 5px 0 0 0;"
            :options="art_type"
            v-model="artdata.type"
            @change="onChangeArtType"
          />
        </div>
        <div class="input_line">
          <label class="label_name">文章所属标签:</label>
          <a-select v-model="artdata.tag_id" :defaultValue="artdata.tag_id">
            <a-select-option
              :value="Number(item.id)"
              :title="item.tagname"
              v-for="item in tagdatalist"
              :key="item.id"
            >{{item.tagname}}</a-select-option>
          </a-select>
        </div>
      </div>
    </div>
    <div class="input_line">
      <label class="label_name">文章简介:</label>
      <a-textarea
        placeholder="文章简介"
        :autoSize="{ minRows: 2, maxRows: 6 }"
        v-model="artdata.desc"
      />
    </div>
    <div class="input_line">
      <label class="label_name">文章内容:</label>
      <mavon-editor
        @change="changeData"
        v-model="artdata.marktext"
        style="min-height:580px;z-index:0;width:100%"
        :ishljs="true"
      ></mavon-editor>
    </div>
    <div class="input_line">
      <label class="label_name">文章链接:</label>
      <a-input placeholder="文章链接" v-model="artdata.linkurl" />
    </div>
    <div class="btn_div">
      <a-button type="primary" style="margin-right:7px;" @click="submitArt">提交数据</a-button>
      <a-button @click="resetData">重置数据</a-button>
    </div>
  </form>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from 'vuex'
import { PageHeader } from 'ant-design-vue'
import "mavon-editor/dist/css/index.css";
import mavonEditor from "mavon-editor";
Vue.use(mavonEditor);
export default Vue.extend ({
    components:{
        PageHeader
    },
    props: {
        wrrittedata: {
            type: Object,
            default(){
              return {}
            }
        },
    },
    data() {
        return {
            artdata: {
                title: "",
                stitle: "",
                desc: "",
                cate_id: 0,
                tag_id: 0,
                author: "",
                type: 0,
                content: "",
                marktext: "",
                isvip:0,
                islogin:0,
                linkurl: ""
            },
            typetitle: ["文章添加", "文章编辑"],
            is_vip: [
                { label: "是", value: 1 },
                { label: "否", value: 0 }
            ],
            is_login:[
                { label: "是", value: 1 },
                { label: "否", value: 0 }
            ],
            art_type: [
                { label: "原创", value: 0 },
                { label: "转载", value: 1 },
                { label: "教程", value: 2 },
                { label: "杂谈", value: 3 }
            ],
            //catelistdata: [],
            //tagdatalist: []
        };
    },
    watch: {
        wrrittedata(value:any, oldvalue:any) {
            for (let i in this.wrrittedata) {
                if (typeof this.wrrittedata[i] == "number") {
                  this.wrrittedata[i] = `${this.wrrittedata[i]}`;
                }
            }
            Object.assign(this.artdata, this.wrrittedata);
        }
    },
    created() {
        Object.assign(this.artdata, this.wrrittedata);
        //console.log(this.artdata,this.wrrittedata)
    },
    computed:{
      ...mapState({
          catelistdata:(state:any)=>state.catetag.catelist,
          tagdatalist:(state:any)=>state.catetag.taglist
      })
    },
    methods: {
        onChangeVip(e:any) {
            (this as any).artdata.isvip = e.target.value;
        },
        onChangeLogin(e:any){
            (this as any).artdata.islogin = e.target.value;
        },
        onChangeRecomon(e:any) {
            (this as any).artdata.isrecommen = e.target.value;
        },
        onChangeArtType(e:any) {
            (this as any).artdata.type = e.target.value;
        },
        changeData(value:any, render:any) {
            (this as any).artdata.marktext = value;
            this.artdata.content = render;
        },
        //提交数据
        submitArt() {
        let data = this.artdata;
            this.$emit("getArtData", data);
        },
        //重置数据
        resetData() {
            Object.assign(this.artdata, this.wrrittedata);
        },
    }
})
</script>
<style lang="less" scoped>
.wrrite_art {
  font-size: 14px;
  .btn_div {
    width: 100%;
    box-sizing: border-box;
    padding-right: 20px;
    text-align: right;
  }
  .header {
    font-size: 16px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #cfcfcf;
  }
  .wrrite_hd {
    display: flex;
    .hd_fiexd {
      flex: 1;
    }
  }
  .input_line {
    display: flex;
    margin: 5px 5px;
  }
  .label_name {
    height: 32px;
    line-height: 32px;
    font-weight: 500;
    flex: 0 0 100px;
  }
}
</style>