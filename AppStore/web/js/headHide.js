$(document).ready(function() {
	$(".footer").css("display","none");
	$(".indexHeader").css("display","block");
	var ua = navigator.userAgent.toLowerCase();
	if((ua.indexOf('ewifibrowser'))!=-1){
		$(".footer").css("display","none");
		$(".indexHeader").css("display","none");
	}
});
