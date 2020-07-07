import './404.less';
let wait:any = document.getElementById('wait')
let interval = setInterval(function () {
    let time = --wait.innerHTML;
    if (time <= 0) {
        clearInterval(interval);
        window.history.back()
    }
}, 1000);