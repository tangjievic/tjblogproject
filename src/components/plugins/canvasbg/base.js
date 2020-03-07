class canvasBase {
    constructor(){

    }
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

export default canvasBase