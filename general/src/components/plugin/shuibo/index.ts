import './index.css';
function createCircle() {
    const circleEl = document.createElement('div');
    const box = document.createElement('div');
    box.classList.add('shuibo_box');
	circleEl.classList.add('plugin-circle')
	circleEl.style.top = Math.random() * innerHeight + "px";
    circleEl.style.left = Math.random() * innerWidth + "px";
    document.body.appendChild(box);
	box.appendChild(circleEl);
	setTimeout(() => {
        circleEl.remove()
    }, 3000)
}
setInterval(createCircle, 300)