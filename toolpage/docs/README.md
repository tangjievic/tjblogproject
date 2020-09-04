这一节比较简单了，也没啥说的
一、事件绑定
1.1 通用事件绑定
el.addEventListener(event,callback)
el.preventDefault( ); 阻止通过 addEventListener( ) 添加的事件的默认事件
1.2 ie事件绑定
el.attachEvent(el,callback)
el.returnValue = false; 阻止通过 attachEvent( ) 添加的事件的默认事件

接下来写一个类似于jq的世界绑定吧，未做ie兼容，懒得写了，也不是什么难事
<ClientOnly>
<VsCode>
let a = window.a=window.$=function (el){
	if(this instanceof a){
		this.el = document.querySelector(el)
	}else{
		return new a(el)
	}
}
a.prototype.on=function(evnettype,callback){
	this.el.addEventListener(evnettype,callback)
}
//使用
$('.parent').on('click',()=>{
	alert('sss')
})
</VsCode>
</ClientOnly>
 
