<style lang="less" scoped>
.form_box{
    border:1px solid rgba(0,0,0,0.1);
    padding: 20px;
    .img{
        flex:1;
        border: 1px solid rgba(0,0,0,0.1);
        height: 130px;
        width: 100px;
        padding: 5px;
        img{
            width: 100%;
        }
    }
    .sfz_img{
        border: 1px solid rgba(0,0,0,0.1);
        padding: 20px;
        max-width: 400px;
        min-height: 100px;
        img{
            width: 100%;
        }
    }
    .img_select{
        border: 1px solid rgba(0,0,0,0.1);
        padding: 5px;
        min-height: 700px;
        max-height: 800px;
        overflow: auto;
        .title{
            padding: 5px;
            text-align: center;
            color: #ffffff;
            background: #2c97e9;
            margin-bottom: 5px;
        }
        ul>li{
            margin-bottom: 10px;
        }
    }
}
.select_imgbox{
    width: 800px;
    height: 600px;
    margin:  0 auto;
    margin-bottom: 10px;
}
.other_img_box{
    border: 1px solid rgba(0,0,0,0.1);
    padding: 20px;
    width: 240%;
    li{
        max-width: 150px;
        img{
            width: 100%;
        }
    }
}
</style>

<template>
    <div class="form_box">
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }" labelAlign="left">
            <a-row>
                <a-col :span="18">
                    <a-row>
                        <a-col :span="12">
                            <a-form-item label="员工头像">
                                <div class="img">
                                    <img :src="hd_img" v-if="hd_img">
                                    <span v-else>待上传</span>
                                </div>
                                <div>
                                    <a-button type="primary" style="margin-right:10px" @click="getLocalImg('hd')">本地获取</a-button>
                                    <a-button style="margin-right:10px"  @click="getRightimg('hd')">右侧获取</a-button>
                                    <!-- <a-button type="danger">更换图片</a-button> -->
                                </div>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="创建日期:">{{momentFormat(submit_data.createtime*1000)}}</a-form-item>
                            <a-form-item label="临时id:"></a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="12">
                            <a-form-item label="员工姓名">
                                <a-input v-decorator="['name', { rules: [{ required: true, message: '此字段不能为空' }] }]"/>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="员工电话">
                                <a-input v-decorator="['phone', { rules: [{ required: true, message: '此字段不能为空' }] }]"/>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="12">
                            <a-form-item label="身高">
                                <a-input v-decorator="['height', { rules: [{ required: true, message: '此字段不能为空' }] }]"/>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="体重">
                                <a-input v-decorator="['weight', { rules: [{ required: true, message: '此字段不能为空' }] }]"/>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="12">
                            <a-form-item label="身份证号">
                                <a-input @blur="getAge" v-decorator="['sfz', { rules: [{ required: true, message: '此字段不能为空' }] }]"/>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="年龄" disabled>
                                <a-input v-model="submit_data.age" disabled></a-input>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="12">
                            <a-form-item label="身份证正面:">
                                <div class="sfz_img">
                                    <img :src="sfz_img[0]" v-if="sfz_img[0]">
                                    <span v-else>暂无图片，待上传</span>
                                </div>
                                <div>
                                    <a-button type="primary" style="margin-right:10px"  @click="getLocalImg('sfz')">本地获取</a-button>
                                    <a-button style="margin-right:10px" @click="getRightimg('hd')">右侧获取</a-button>
                                    <!-- <a-button type="danger">更换图片</a-button> -->
                                </div>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="身份证反面:">
                                <div class="sfz_img">
                                    <img :src="sfz_img[1]" v-if="sfz_img[1]">
                                    <span v-else>暂无图片，待上传</span>
                                </div>
                                <div>
                                    <a-button type="primary" style="margin-right:10px"  @click="getLocalImg('sfz')">本地获取</a-button>
                                    <a-button style="margin-right:10px" @click="getRightimg('hd')">右侧获取</a-button>
                                    <!-- <a-button type="danger">更换图片</a-button> -->
                                </div>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="12">
                            <a-form-item label="现住地址">
                                <a-input type="textarea" v-decorator="['site', { rules: [{ required: true, message: '此字段不能为空' }] }]"/>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="掌握语言">
                                <a-input v-decorator="['language', { rules: [{ required: true, message: '此字段不能为空' }] }]"/>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="12">
                            <a-form-item label="工作经验">
                                <a-input type="textarea" v-decorator="['experience', { rules: [{ required: true, message: '此字段不能为空' }] }]"/>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="工作年限">
                                <a-input v-decorator="['work_years', { rules: [{ required: true, message: '此字段不能为空' }] }]"/>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="12">
                            <a-form-item label="工作技能">
                                <a-input type="textarea" v-decorator="['skill']"/>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="技能证书">
                                <a-input type="textarea" v-decorator="['credential']"/>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="12">
                            <a-form-item label="期望薪资">
                                <a-input v-decorator="['salary']"/>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="学历">
                                <a-select
                                    default-value="小学"
                                    v-model="submit_data.education"
                                >
                                    <a-select-option value="小学">小学</a-select-option>
                                    <a-select-option value="初中">初中</a-select-option>
                                    <a-select-option value="高中">高中</a-select-option>
                                    <a-select-option value="本科">本科</a-select-option>
                                    <a-select-option value="硕士">硕士</a-select-option>
                                    <a-select-option value="博士">博士</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row style="position:relative">
                        <a-col :span="12">
                            <a-form-item label="其他图片">
                                <ul class="other_img_box">
                                    <li v-for="item in other_img" :key="item">
                                        <img :src="item" v-if="item">
                                        <span v-else>暂无图片，待上传</span>
                                    </li>
                                </ul>
                                <div>
                                    <a-button type="primary" style="margin-right:10px"  @click="getLocalImg('sfz')">本地获取</a-button>
                                    <a-button style="margin-right:10px" @click="getRightimg('hd')">右侧获取</a-button>
                                </div>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :span="6">
                    <div class="img_select">
                        <div class="title">图片选择栏</div>
                         <a-radio-group @change="onChange" v-model="radio">
                            <ul>
                                <li>
                                    <a-row>
                                        <a-col :span="4"><a-radio :value="0"></a-radio></a-col>
                                        <a-col :span="20">
                                            <img style="width:100%" src="https://img.yzcdn.cn/vant/tree.jpg">
                                        </a-col>
                                    </a-row>
                                </li>
                                <li>
                                    <a-row>
                                        <a-col :span="4"><a-radio :value="1"></a-radio></a-col>
                                        <a-col :span="20">
                                            <img style="width:100%" src="https://avatars3.githubusercontent.com/u/44808093?s=460&v=4">
                                        </a-col>
                                    </a-row>
                                </li>
                            </ul>
                        </a-radio-group>
                    </div>
                </a-col>
            </a-row>
            <a-divider type="horizontal" />
            <a-form-item>
                <a-button type="primary" html-type="submit" @click="handleSubmit">
                    员工信息录入上传提交
                </a-button>
            </a-form-item>
        </a-form>
        <a-modal :width="900" 
        title="图片操作" 
        okText="确认上传"
        cancelText="取消上传"
        v-model="visible" @ok="handleOk">
            <div class="select_imgbox">
                <vue-cropper
                :fixed="true"
                :canMove="false"
                :autoCrop="true"
                :fixedNumber="fixedNumber"
                ref="cropper"
                :img="cropper_img"
                :outputSize="1"
                outputType="jpg"
                ></vue-cropper>
            </div>
            <div>
                <input @change="getLocalFile" style="visibility:hidden;height: 0;width: 0;" type="file" ref="local_input">
                <a-button @click="openFile" v-show="isopenlocalfile">打开本地文件</a-button> 
                <!-- <a-button style="margin-left:10px;" @click="openFile">确认裁剪</a-button> -->
            </div>
        </a-modal>
    </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
import Moment from 'moment';
export default {
    components: {
        VueCropper,
    },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'coordinated' }),
            radio:0,
            right_imgurl:['https://img.yzcdn.cn/vant/tree.jpg','https://avatars3.githubusercontent.com/u/44808093?s=460&v=4'],
            visible:false,
            cropper_img:'',
            fixedNumber:[1,1],
            isopenlocalfile:false,
            submit_data:{
                age:0,
                education:'小学',
                hd_img:'',
                sfz_img:'',
                other_img:'',
                createtime: parseInt(new Date()/1000)
            },
            hd_img:"",
            sfz_img:['',''],
            other_img:[''],
        }
    },
    created(){

    },
    actived(){

    },
    methods: {
        //数据初始化
        initData(){

        },
        onChange(){
            
        },
        momentFormat(params){
            return Moment(params).format('YYYY-MM-DD')
        },
        getRightimg(type){
            if(type=="hd"){
                this.fixedNumber = [10,13]
            }else if(type=="sfz"){
                this.fixedNumber = [1.58,1]
            }else{
                this.fixedNumber = [1,1]
            }
            this.isopenlocalfile = false
            this.visible = true
            this.cropper_img = this.right_imgurl[this.radio]
        },
        getLocalImg(type){
            if(type=="hd"){
                this.fixedNumber = [10,13]
            }else if(type=="sfz"){
                this.fixedNumber = [1.58,1]
            }else{
                this.fixedNumber = [1,1]
            }
            this.isopenlocalfile = true
            this.visible = true
            this.cropper_img = null
        },
        //图片裁剪确认，图片上上传
        handleOk(){
            //this.visible = false
            this.$refs.cropper.getCropData((data) => {
                //请求cgi图片上传
                console.log(data)  
            })
        },
        //打开本地文件
        openFile(){
            this.$refs.local_input.click();
        },
        //获取本地文件数据
        getLocalFile(){
            let reader = new FileReader();
            let imgsrc = null;
            let _file = this.$refs.local_input.files[0];
            reader.readAsDataURL(this.$refs.local_input.files[0])
            reader.onload = (e)=>{
                this.cropper_img = reader.result;
                console.log(this.cropper_img)
            }
            // let cropper_img = reader.readAsDataURL(this.$refs.local_input.files[0])
            // console.log(cropper_img)
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }else{
                    //请求cgi
                    Object.assign(this.submit_data,values);
                }
            });
        },
        getAge(e){
            console.log(e.target.value)
            let UUserCard = e.target.value;
            let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (reg.test(UUserCard) === false) {
                return
            }
            let myDate = new Date();
            let month = myDate.getMonth() + 1;
            let day = myDate.getDate();
            let age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
            if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
                age++;
            }
            this.submit_data.age = age
        },
    },
}
</script>

