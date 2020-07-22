import './index.css';
let time = setTimeout(()=>{
    $('.loading_box').fadeOut()
    clearTimeout(time)
},1500)
