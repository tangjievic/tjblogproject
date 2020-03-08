let indexTab = (parentDom) =>{
    let pDom = document.querySelector(`div[role='blog_tab'].${parentDom}`);
    let thread = pDom.querySelector('.box_thread');
    let fsLi = pDom.querySelectorAll('.option__hd li');
    let opLs = pDom.querySelectorAll('.option_ls');
    opLs[0].style.display = 'block'
    //偏移距离数组存储
    let arr = (()=>{
        let arr =[0],distance=arr[0];
        for(let i=0;i<fsLi.length;i++){
            if(i!==0){
                distance += fsLi[i-1].offsetWidth;
                arr.push(distance)
            }
        };
        return arr;
    })()
    thread.style.width = `${fsLi[0].offsetWidth}px`
    pDom.addEventListener('mouseover',(e)=>{
        let evt = e.target||event.target
        thread.style.left = `${arr[evt.dataset.id]}px`
        if(evt.tagName==="LI"&&evt.className=="option_li"){
            opLs.forEach((values)=>{
                values.style.display = 'none';
            })
            opLs[evt.dataset.id].style.display='block';
            thread.style.width = `${evt.offsetWidth}px`
        }
    })
}

export default indexTab