import './index.less';
const box = document.createElement('div');
box.classList.add('shuibo_box','wet-pc');
document.body.appendChild(box);
function createCircle() {
    const circleEl = document.createElement('div');
	circleEl.classList.add('plugin-circle')
	circleEl.style.top = Math.random() * innerHeight + "px";
    circleEl.style.left = Math.random() * innerWidth + "px";
	box.appendChild(circleEl);
	setTimeout(() => {
        circleEl.remove()
    }, 3000)
}

//createCircle()
setInterval(createCircle, 300)