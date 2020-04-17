<template>
  <form class="wrrite_art">
    <div class="header">{{!edit?typetitle[0]:typetitle[1]}}</div>
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
              :value="String(item.id)"
              :title="item.catename"
              v-for="item in catelistdata"
              :key="item.id"
            >{{item.catename}}</a-select-option>
          </a-select>
        </div>
      </div>
      <div class="hd_fiexd">
        <div class="input_line">
          <label class="label_name">是否是vip文章:</label>
          <a-radio-group
            style="padding: 5px 0 0 0;"
            :options="is_vip"
            v-model="artdata.is_vip"
            @change="onChangeVip"
          />
        </div>
        <div class="input_line">
          <label class="label_name">是否是推荐:</label>
          <a-radio-group
            style="padding: 5px 0 0 0;"
            :options="is_recomend"
            v-model="artdata.is_recomon"
            @change="onChangeRecomon"
          />
        </div>
        <div class="input_line">
          <label class="label_name">文章类型:</label>
          <a-radio-group
            style="padding: 5px 0 0 0;"
            :options="arttype"
            v-model="artdata.type"
            @change="onChangeArtType"
          />
        </div>
        <div class="input_line">
          <label class="label_name">文章所属标签:</label>
          <a-select v-model="artdata.tag_id" :defaultValue="artdata.cate_id">
            <a-select-option
              :value="String(item.id)"
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
        :autosize="{ minRows: 2, maxRows: 6 }"
        v-model="artdata.descs"
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
      <label class="label_name">文章模板:</label>
      <a-input placeholder="文章模板" v-model="artdata.path" />
    </div>
    <div class="input_line">
      <label class="label_name">文章链接:</label>
      <a-input placeholder="文章链接" v-model="artdata.link_url" />
    </div>
    <div class="btn_div">
      <a-button type="primary" style="margin-right:7px;" @click="submitArt">提交数据</a-button>
      <a-button @click="resetData">重置数据</a-button>
    </div>
  </form>
</template>
<script>
import Vue from "vue";
import "mavon-editor/dist/css/index.css";
import { getCate, getTagsList } from "../../apicontrol/apilist.js";
import mavonEditor from "mavon-editor";
Vue.use(mavonEditor);
export default {
  props: {
    wrrittedata: {
      type: Object
    },
    edit: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      artdata: {
        title: "",
        stitle: "",
        descs: "",
        cate_id: "",
        tag_id: "",
        author: "",
        type: "0",
        content: "",
        marktext: "",
        is_recomon: "0",
        is_vip: "0",
        path: "",
        link_url: ""
      },
      typetitle: ["文章添加", "文章编辑"],
      is_vip: [
        { label: "是", value: "1" },
        { label: "否", value: "0" }
      ],
      is_recomend: [
        { label: "是", value: "1" },
        { label: "否", value: "0" }
      ],
      arttype: [
        { label: "原创", value: "0" },
        { label: "转载", value: "1" },
        { label: "教程", value: "2" },
        { label: "杂谈", value: "3" }
      ],
      catelistdata: [],
      tagdatalist: []
    };
  },
  watch: {
    wrrittedata(value, oldvalue) {
      //console.log(this.wrrittedata)
      for (let i in this.wrrittedata) {
        if (typeof this.wrrittedata[i] == "number") {
          this.wrrittedata[i] = `${this.wrrittedata[i]}`;
        }
      }
      Object.assign(this.artdata, this.wrrittedata);
      //console.log(this.artdata)
      //this.changeData(this.artdata.marktext,this.artdata.content)
    }
  },
  created() {
    this.getSelectCate("init");
    this.getTagsList("init");
    Object.assign(this.artdata, this.wrrittedata);
  },
  methods: {
    onChangeVip(e) {
      this.artdata.is_vip = e.target.value;
    },
    onChangeRecomon(e) {
      this.artdata.is_recomon = e.target.value;
    },
    onChangeArtType(e) {
      this.artdata.type = e.target.value;
    },
    changeData(value, render) {
      this.artdata.marktext = value;
      this.artdata.content = render;
    },
    //提交数据
    submitArt() {
      let data = this.artdata;
      //console.log(data);
      this.$emit("getArtData", data);
    },
    //重置数据
    resetData() {
      Object.assign(this.artdata, this.wrrittedata);
    },
    //获取分类栏目
    getSelectCate(type) {
      getCate({ type: "select" }).then(res => {
        let temp = [];
        res.data.forEach(item => {
          if (item.pid == 0) {
            temp.push(item);
          }
        });
        this.catelistdata = temp;
        if (type == "init") {
          this.artdata.cate_id = String(this.catelistdata["0"].id);
        }
      });
    },
    //获取分类标签
    getTagsList(type) {
      getTagsList().then(res => {
        this.tagdatalist = res.data;
        if (type == "init") {
          this.artdata.tag_id = String(this.tagdatalist["0"].id);
        }
      });
    }
    //数据校验逻辑
  }
};
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