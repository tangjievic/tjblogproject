import './lost.less'

let wait = document.getElementById('wait')
let interval = setInterval(function () {
    let time = --wait.innerHTML;
    if (time <= 0) {
        clearInterval(interval);
        window.history.back(-1)
    }
}, 1000);