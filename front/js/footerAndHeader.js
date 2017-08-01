$(function(){
	
	//所有页面的点击logo，调到首页
	$("#logo").click(function(){
		window.location.href= "index.html";
	});
	
	/**头部的导航下换线**/
	$(".navLi").click(function(){
		$(this).children("a").addClass("active");
	})
	/***头部数据+尾部数据  的课程数据***/
	$.ajax({
        async: false,　　　　　　　
        type: "get",   
        url: "json/homeCourse.json",   
        cache: false,
        dataType: "json",
        success: function(json) {  
        	if(json.code == 200){
        		var subjectsList = "";
	    		var data = json.data;  /**数组**/
	    		data.forEach(function(item,index){
	    			console.log("1111111111111111"+item.url);
	    			subjectsList += 
					"<li>"+
					    "<a href="+item.url+">"+item.chineseName+"</a>"+
					"</li>"; 
	   	    		headerAndFooterSubjectsFun(item,index);
	   	    	});
	   	    	$(".sub_nav").html(subjectsList);
	   	   
			}else{
				alert("请求失败");
			}
        }
    });
	 
	/***尾部数据  的电话号码+地址***/
	$.ajax({
        async: false,　　　　　　　
        type: "get",   
        url: "json/homeWebsiteInfo.json",   
        cache: false,
        dataType: "json",
        success: function(json) {  
        	if(json.code == 200){
        		var data = json.data;  /**数组**/
	   	    	data.forEach(function(item,index){
		   	    	footerPhoneAndAdrrFunc(item,index);
	   	    	});
	   	    }else{
				alert("请求失败");
			}
        }
    });
    /**头尾的课程列表数据**/
	function headerAndFooterSubjectsFun(item,index) {
		var headerSubjects = $(".sub_nav li").eq(index);
		var footerCourse = $(".footerCourse li").eq(index+1);
		headerSubjects.find("a").html(item.chineseName);       // 头部的课程数据
		footerCourse.html(item.chineseName);                   // 尾部的课程数据
		
	}
	/**尾部电话和地址数据**/
	function footerPhoneAndAdrrFunc(item,index) {
		var footerPhone = $(".footerPhone");
		var footerAddr = $(".footerAddr");
		footerPhone.html(item.tel);                            // 尾部电话号
		footerAddr.html(item.address);                         // 尾部地址
		
	}
})
