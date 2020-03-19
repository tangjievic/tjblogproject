import canvasBase from '../base.js'
class dreamLike extends canvasBase{
    constructor(object={
        name:'dremlike',
        circle: {//小球属性
            amount: 16,
            layer: 3,
            color: [157, 97, 207],
            alpha: 0.3
        },
        speed: 0.5,
    }){
        super();
        this.object = object;
    }
    /* 初始化 */
    init(canvasbox){
        dreamLike.canvasbox = document.querySelector(canvasbox);
        dreamLike.canvas = dreamLike.canvasbox.querySelector('canvas');
        dreamLike.drawPanel = dreamLike.canvas.getContext('2d');
        /* 添加静态属性 */
        dreamLike.W = dreamLike.canvasbox.offsetWidth;
        dreamLike.H = dreamLike.canvasbox.offsetHeight;
        dreamLike.params = this.object;
        /* 初始化canvas */
        dreamLike.canvas.width = dreamLike.W;
        dreamLike.canvas.height = dreamLike.H;
        dreamLike.createItem();
        window.addEventListener('resize',()=>{
            dreamLike.canvas.width = dreamLike.W;
            dreamLike.canvas.height = dreamLike.H;
            dreamLike.createItem()
        })
        //console.log(dreamLike.requestAnimationFrame)
        //dreamLike.s()
    }
    /* 画小球 */
    static drawCircle (x, y, radius, color, alpha){
        let gradient = dreamLike.drawPanel.createRadialGradient(x, y, radius, x, y, 0);
        gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
        gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

        dreamLike.drawPanel.beginPath();
        dreamLike.drawPanel.arc(x, y, radius, 0, Math.PI*2, true);
        dreamLike.drawPanel.fillStyle = gradient;
        dreamLike.drawPanel.fill();
    }
    /* 动画函数*/
    static animate(){
        let requestAnimationFrame = dreamLike.requestAnimationFrame()
        let sin = Math.sin(dreamLike.degree),
        cos = Math.cos(dreamLike.degree);
        if (dreamLike.params.circle.amount > 0){
            dreamLike.drawPanel.clearRect(0, 0,dreamLike.W,dreamLike.H);
            for (let i=0, len = dreamLike.circles.length; i<len; i++){
                let item = dreamLike.circles[i],
                    x = item.x,
                    y = item.y,
                    radius = item.radius,
                    speed = item.speed;

                if (x > dreamLike.W + radius){
                    x = -radius;
                } else if (x < -radius){
                    x = dreamLike.W + radius
                } else {
                    x += sin*speed;
                }

                if (y > dreamLike.H + radius){
                    y = -radius;
                } else if (y < -radius){
                    y = dreamLike.H + radius;
                } else {
                    y -= cos*speed;
                }

                item.x = x;
                item.y = y;
                dreamLike.drawCircle(x, y, radius, item.color, item.alpha);
            }
        }
        dreamLike.timer = requestAnimationFrame(dreamLike.animate);
    }
        /*创建多个小球或短横线*/
    static createItem (){
        dreamLike.circles = [];
        //lines = [];
        let cancelAnimationFrame = dreamLike.cancelAnimationFrame();
        let requestAnimationFrame = dreamLike.requestAnimationFrame();
        if (dreamLike.params.circle.amount > 0 && dreamLike.params.circle.layer > 0){
            for (let i=0; i<dreamLike.params.circle.amount/dreamLike.params.circle.layer; i++){
                for (let j=0; j<dreamLike.params.circle.layer; j++){
                    dreamLike.circles.push({
                        x: Math.random() * dreamLike.W,
                        y: Math.random() * dreamLike.H,
                        radius: Math.random()*(20+j*5)+(20+j*5),
                        color: dreamLike.params.circle.color,
                        alpha: Math.random()*0.2+(dreamLike.params.circle.alpha-j*0.1),
                        speed: dreamLike.params.speed*(1+j*0.5)
                    });
                }
            }
        }
        //console.log(dreamLike.circles.length)
        cancelAnimationFrame(dreamLike.timer);
        dreamLike.timer = requestAnimationFrame(dreamLike.animate);
    }
}
dreamLike.degree = 20/360*Math.PI*2
export {
    dreamLike,
}