$(function(){
	$(".tab-item").on("click",function(){
		$(this).addClass("active").siblings(".tab-item").removeClass("active");
	}).on("click","ding",function(){
		location.href=	$(this).attr("href")
	})
})
