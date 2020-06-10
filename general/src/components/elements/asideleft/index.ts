import './index.css';
$('#blog_hangye').on('mouseover',()=>{
    $('#blog_hangye').addClass('actived');
    $('.box_left-catgrey').addClass('actived');
}).on('mouseout',(e)=>{
    //console.log(e)
    $('.box_left-catgrey').removeClass('actived');
    $('#blog_hangye').removeClass('actived');
    $('.box_left-catgrey').on('mouseover',()=>{
        $('.box_left-catgrey').addClass('actived');
        $('#blog_hangye').addClass('actived');
    }).on('mouseout',()=>{
        $('#blog_hangye').removeClass('actived');
        $('.box_left-catgrey').removeClass('actived');
    })

})