$(function(){
	$(".btn").on("click",function(){
		$(this).addClass("btn-negative").siblings(".btn").removeClass("btn-negative");
	})
	$(".zhuc").on("click","ding",function(){
		location.href=	$(this).attr("href")
	})
})
