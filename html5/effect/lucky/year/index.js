/*
* @Author: fozero@126.
* @Date:   2019-01-11 20:06:27
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-12 13:15:20
*/
(function($){
	var userPic = [
		['http://www.jsdaima.com/Upload/1486617283/1.jpg','小明'],
		['http://www.jsdaima.com/Upload/1486617283/2.jpg','小花'],
		['http://www.jsdaima.com/Upload/1486617283/3.jpg','小菜'],
		['http://www.jsdaima.com/Upload/1486617283/4.jpg','小君'],
		['http://www.jsdaima.com/Upload/1486617283/5.jpg','小狗'],
		['http://www.jsdaima.com/Upload/1486617283/6.jpg','小猫'],
		['http://www.jsdaima.com/Upload/1486617283/7.jpg','小猪']
	];
	var userCount = userPic.length-1;//参加人数
	var $JStart = $('.J_start'),
		$JStop = $('.J_stop'),
		$JSlot = $('.J_slot'),
		$JName = $('.J_name');
	var runing = true;
	var num = 0;
	$JStart.click(function(){
		if(runing){
			runing = false;
			$JStart.hide();
			$JStop.show();
			startNum();
		}
	});
	$JStop.click(function(){
		runing = true;
		$JStart.show();
		$JStop.hide();
		userCount = userPic.length-1;
		clearInterval(t);
		t = 0;
	});
	$(document).keyup(function(event){
	  if(event.keyCode ==13){
	  	if(runing){
	  		$JStart.trigger("click");
	  		return;
	  	}
	  	$JStop.trigger("click");
	    
	  }
	});
	// 循环名单
	function startNum() {
		num = Math.floor(Math.random() * userCount);
		$JSlot.css('background-image','url('+userPic[num][0]+')');
		t = setTimeout(startNum, 0);
	}
	$JSlot.css('background-image','url('+userPic[0][0]+')');
})(jQuery);