$(function(){
	// 加载头尾
	$("#header").load("header.html");
	$("#footer").load("footer.html");
	
    /**校园环境的图片的鼠标悬停效果**/
	$(".picContainer li").hover(function(){
		$(this).find(".cover").show();
		$(this).find(".coverInnerTxt").show();
	},function(){
		$(this).find(".cover").hide();
		$(this).find(".coverInnerTxt").hide();
	})
	
	
	
	
	
})
