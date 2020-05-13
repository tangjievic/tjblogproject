import React, { Component } from 'react';
import { Row, Col  } from 'antd';
import TJHeader from '../../components/header/header'
import {
    Route,
    Redirect
} from "react-router-dom";
import { connect } from 'react-redux'
import { getUserMsgAction ,getCateMsg} from '../../store/action_creator'


class canvasBase {
    static s(){
        console.log("我是父级")
    }
        /* 定时函数 */
    static requestAnimationFrame(){
        return window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback, element) { setTimeout(callback, 1000 / 60); };
    }
    /* 清除定时器 */
    static cancelAnimationFrame(){
        return window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            clearTimeout;
        //return clearTimeout;
    }
}

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

class UerIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        //console.log(this.props.userData)
        let {userData,cateMsg} = this.props;
        return (
            <div>
                <header className="App_hd">
                    <Row className="hd_box">
                        <Col span={24}>
                            <TJHeader 
                            Route={this.props.history}
                            userData={userData} 
                            cateMsg={cateMsg}></TJHeader>
                        </Col>
                    </Row>
                </header>
                <section className="App_content">
                    <Row>
                        <Col span={16}>
                            <div className="main">
                                {
                                    this.props.routers.map((route,key)=>{
                                        if(route.redirect){
                                            return(
                                                <Route exact path={route.path} key={key}>
                                                    <Redirect  to={route.redirect.to}/>
                                                </Route>
                                            )
                                        }
                                        return (
                                            <Route key={key} path={route.path} exact render={props=>(
                                                <route.component {...props} routers={route.routers}></route.component>
                                            )} ></Route>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </section>
                <div className="bgdiv">
                    <div className="item_a">
                        <svg height="519" width="758">
                            <polygon points="0,455,693,352,173,0,92,0,0,71" style={{fill:'#d2d2d2',stroke:'purple',strokeWidth:0, opacity: 0.6}}/>
                        </svg>
                    </div>
                    <div className="item_b">
                        <svg  height="536" width="633">
                            <polygon points="0,0,633,0,633,536" style={{fill:'#c0e3e7',stroke:'purple',strokeWidth:0,opacity: 0.8}} />
                        </svg>
                    </div>
                    <div className="canvasbox">
                        <canvas className="canvas"></canvas>
                    </div>
                </div>
            </div>
        )
    }
    //页面初始化
    initPage(){
        new dreamLike({
            name:'bg1',
            circle:{
                amount:88,
                layer:3,
                color:[255,255,255],
                alpha:0.4
            },
            speed:0.5,
        }).init(".bgdiv .canvasbox");
        this.props.reqUserData()
        this.props.reqCateMsg()
    }
    //生命周期
    componentDidMount(){
        this.initPage()
    }
}
// redux的应用范例
const mapState = (state)=>{
    return {
        userData:state.userData,
        cateMsg:state.cateMsg
    }
}

const mapAtion = (dispatch) =>{
    return {
        reqUserData(){
            const action = getUserMsgAction()
            dispatch(action)
        },
        reqCateMsg(){
            const action = getCateMsg()
            dispatch(action)
        }
    }
}

//UerIndex.getDerivedStateFromProps(userData)
//export default UerIndex;
export default connect(mapState,mapAtion)(UerIndex)