(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aad78"],{1377:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("written-art",{attrs:{wrrittedata:t.editedata},on:{getArtData:t.submitArtData}})],1)},i=[],s=r("333e"),n=r("6d5e"),o={components:{writtenArt:s["a"]},activated:function(){this.$route.params&&this.$route.params.record?this.editedata=this.recordart:this.$router.back(-1)},computed:{recordart:function(){return this.$route.params&&this.$route.params.record?this.$route.params.record:{}}},data:function(){return{editedata:{title:"",stitle:"",descs:"",cate_id:"",tag_id:"",author:"",type:"0",content:"",marktext:"",is_recomon:"0",is_vip:"0",path:"",link_url:""}}},methods:{submitArtData:function(t){var e=this,r=this;Object(n["j"])(t).then((function(t){r.$message.success(t.message),setTimeout((function(){e.$router.back(-1)}),1e3)}))}}},c=o,u=r("623f"),d=Object(u["a"])(c,a,i,!1,null,"155075db",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0aad78.4ce78a34.js.map