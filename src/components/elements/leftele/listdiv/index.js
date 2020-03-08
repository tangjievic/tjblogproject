let pullDown = ()=>{
    let colse = true;
    let btn = document.getElementById('showorpack');
    btn.innerHTML = '展开'
    let moreul = document.querySelector('.more-list');
    let liitem = moreul.querySelectorAll('li');
    let height = null;
    if(liitem&&liitem.length!=0){
        height = liitem[0].offsetHeight*(liitem.length+3);
    }else{
        height = 0;
    }
    btn.addEventListener('click',()=>{
        if(close){
            moreul.style.maxHeight = `${height}px`
            btn.innerText = "收起"
            close = false
        }else{
            moreul.removeAttribute('style')
            btn.innerText = '展开'
            close = true
        }
    })
}
export default pullDown;