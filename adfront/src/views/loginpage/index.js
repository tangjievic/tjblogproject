import {managerLogin} from '../../apicontrol/apilist'
const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const formTailLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16, offset: 8 },
};
const index = {
    data() {
        return {
            checkNick: false,
            formItemLayout,
            formTailLayout,
            form: this.$form.createForm(this),
            oldyzm: '',
        }
    },

    created() {
        //console.log(window.history)
    },
    mounted() {
        this.drawCode();
    },
    methods: {
        handleSubmit (e) {
            e.preventDefault();
            //this.$router.replace({name:'adminlist'});
            let regx = new RegExp(this.oldyzm,'i');
            this.form.validateFields((err,values)=>{
                if(regx.test(values.yzm)){
                    if(!err){
                        managerLogin(values).then((res)=>{
                           // console.log(res)
                            let data = res.data
                            if(res.errorcode==10001){
                                window.localStorage.setItem('tjblog_token',data.token);
                                window.localStorage.setItem('tjblog_username',data.username);
                                this.$message.success(res.message);
                                setTimeout(()=>{
                                    this.$router.replace({name:'adminlist'});
                                },1000)
                            }
                        })
                    }
                }else{
                    this.$message.error("验证码输入不正确！")
                }
            })
        },
        //刷新验证码
        updataYzm(){
            var verifybox = document.getElementById('verifybox');
            var oldverifyCanvas = document.getElementById('verifyCanvas');
            verifybox.removeChild(oldverifyCanvas);
            var verifyCanvas = document.createElement('canvas');
            verifyCanvas.width = 100;
            verifyCanvas.height = 40;
            verifyCanvas.id = 'verifyCanvas';
            //$('#verify').after('<canvas width="100" height="40" id="verifyCanvas"></canvas>')
            verifybox.appendChild(verifyCanvas);
            this.drawCode();
        },
        drawCode() {
            let i = 0;
            var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'];
            // 随机线
            function drawline(canvas, context) {
                context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));             //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
                context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));  //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
                context.lineWidth = 0.5;                                                  //随机线宽
                context.strokeStyle = 'rgba(50,50,50,0.3)';                               //随机线描边属性
                context.stroke();                                                         //描边，即起点描到终点
            }
            // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
            function drawDot(canvas, context) {
                var px = Math.floor(Math.random() * canvas.width);
                var py = Math.floor(Math.random() * canvas.height);
                context.moveTo(px, py);
                context.lineTo(px + 1, py + 1);
                context.lineWidth = 0.2;
                context.stroke();

            }
            // 绘制图片
            function convertCanvasToImage(canvas) {
                document.getElementById("verifyCanvas").style.display = "none";
                var image = document.getElementById("code_img");
                image.src = canvas.toDataURL("image/png");
                return image;
            }
            var canvas = document.getElementById("verifyCanvas");  //获取HTML端画布
            var context = canvas.getContext("2d");                 //获取画布2D上下文
            context.fillStyle = "cornflowerblue";                  //画布填充色
            context.fillRect(0, 0, canvas.width, canvas.height);   //清空画布
            context.fillStyle = "white";                           //设置字体颜色
            context.font = "25px Arial";                           //设置字体
            var rand = new Array();
            var x = new Array();
            var y = new Array();
            for (i = 0; i < 5; i++) {
                rand[i] = nums[Math.floor(Math.random() * nums.length)]
                x[i] = i * 16 + 10;
                y[i] = Math.random() * 20 + 20;
                context.fillText(rand[i], x[i], y[i]);
            }
            //console.log(rand.join(''))
            this.oldyzm = rand.join('');
            //alert(rand);
            //画3条随机线
            for (i = 0; i < 3; i++) {
                drawline(canvas, context);
            }

            // 画30个随机点
            for (i = 0; i < 30; i++) {
                drawDot(canvas, context);
            }
            convertCanvasToImage(canvas)
        }
    }
}
export default index;