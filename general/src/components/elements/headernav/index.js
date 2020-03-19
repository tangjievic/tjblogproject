window.jQuery = window.$ = require("jquery");
let openSlider = $('.aui-navBar-item.right');
let slider_mnav = $('.slider_mnav');
let nav_mask = $('.nav_mask');

let sliderNav = ()=>{
    nav_mask[0].addEventListener('touchmove',(e)=>{
        e.preventDefault();
    },{ passive: false })
    openSlider.click(()=>{
        slider_mnav.toggleClass('in');
        nav_mask.fadeToggle();
    })
    nav_mask.click(()=>{
        nav_mask.fadeToggle();
        slider_mnav.toggleClass('in');
    })
    $('.icon_box').click(()=>{
        slider_mnav.toggleClass('in');
        nav_mask.fadeToggle();
    })
}

export default sliderNav