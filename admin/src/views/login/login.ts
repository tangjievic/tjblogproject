import Vue from 'vue';
import LoginLayout from '../../layout/LoginLayout.vue'
import LoginForm from './LoginForm.vue'
import { adminLogin } from '../../cgictrl/adminapi'
import Cookies from 'js-cookie';
export default Vue.extend({
    components:{
        LoginLayout,
        LoginForm
    },
    data(){
        return {
            type:''
        }
    },
    created(){
        (this as any).type = (this as any).$route.params.type? this.$route.params.type:''
    },
    methods:{
        subData(e:any){
            adminLogin(e).then((res:any)=>{
                let data:any = res.data?res.data:res;
                (this as any).$message.success('登录成功')
                Cookies.set('admin_token', data.token, { expires: 2 });
                Cookies.set('adminname',data.username,{ expires: 2 });
                setTimeout(()=>{
                    if(this.type!==''){
                        (this as any).$router.back(-1)
                    }else{
                        (this as any).$router.replace({
                            name:'welcome'
                        })
                    }
                },1000)
            })
        }
    }
})