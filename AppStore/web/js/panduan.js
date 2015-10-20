$(document).ready(function(){
	var ios =false;    			//苹果系统
	var weixinIos = false;		//苹果微信版
	var weixinAnd = false;   	//安卓微信版
	var Android  =false;		//安卓系统
	var client = false;			//客户端
	var pc =false;				//电脑系统
	var pattern = new RegExp(/iPad|iPod|iPhone/i);
	var iosUserAgent = pattern.test(navigator.userAgent);
	if(iosUserAgent){
		//你用的是IOS客户端
		var ios =true;
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger"){
			//你用的是IOS的微信客户端
			weixinIos=true;
		}else if((ua.indexOf('ewifibrowser'))!=-1){
			client =true;
			
		}else{
			
		}
		
	}else if(navigator.userAgent.match(/Android/i)) {
		//你用的是AND客户端
		Android =true;
		//判断
		var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i)=="micromessenger"){
				//安卓微信
				weixinAnd = true;
				
			}else if(ua.indexOf('ewifibrowser')!=-1){
				client =true;
				
			}else{
				
				
			}
		}
	//如果是PC
	else{
		pc =true;
	}
	if(ios){
		$(".uaApp").addClass("iOSPic");
		$(".uaApp").removeClass("AndPic,iOSPicM");
		if(weixinIos){
			$("#hfImg").css("display","none");
			$(".ua").click(function(){
				$("#hfImg").css("display","block");
				$(".wrapper").css("display","none");
			});
		}else{
			$(".ua").attr( "href","itms-services://?action=download-manifest&url=xxxx" );
		}
	}
	if(Android){
		$(".uaApp").addClass("AndPic");
		$(".uaApp").removeClass("iOSPic,iOSPicM");
		if(weixinAnd){
			$("#hfImg").css("display","none");
			$(".ua").click(function(){
				$("#hfImg").css("display","block");
				$(".wrapper").css("display","none");
			});
		}else{
			$(".ua").attr( "href","/AppStore/TexasHoldem-debug.apk" );
		}
	}
	if(pc){
		$(".appsDownL").css("margin-top","3%");
		$(".uaAppN").css("display","block");
		$(".uaAppTxt").remove();
		$(".uaApp").addClass("AndPic");
		$(".uaApp").removeClass("iOSPic,iOSPicM");
		$(".ua").attr("href","/AppStore/TexasHoldem-debug.apk" );
		$(".uaAppN").addClass("iOSPic");
		$(".uaAppN").removeClass("AndPic,iOSPicM");
		$(".uaN").attr("href","itms-services://?action=download-manifest&url=xxxx" );
	}
});




