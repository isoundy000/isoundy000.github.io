$(document).ready(function(){
	if (navigator.userAgent.match(/android/i)) {
		//安卓方法封装
		openAapp();
	}else if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
		openAapp();
	}else{
		//window.location.href="download.html";//指定跳转的页面
	}
	function openAapp(){
			
		document.getElementById('openApp').onclick = function(e) {
			// 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
			// 否则打开a标签的href链接
			var ifrSrc = 'ewifi://';
			if (!ifrSrc) {
				return;
			}
			var ifr = document.createElement('iframe');
			ifr.src = ifrSrc;
			ifr.style.display = 'none';
			document.body.appendChild(ifr);
			setTimeout(function() {
				document.body.removeChild(ifr);

			}, 1000);

		};
		if (document.all) {
			document.getElementById('openApp').click();
		}
		// 其它浏览器
		else {
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", true, true);
			document.getElementById("openApp").dispatchEvent(e);
		}
		
	}
});
