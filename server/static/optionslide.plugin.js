/*
* @Author: fozero@126.
* @Date:   2018-11-29 16:03:09
* @Last Modified by:   fozero
* @Last Modified time: 2018-11-29 16:39:06
*/
;(function($,window,document,undefiend){
	// var optionSlide = {}
	$.fn.optionSlide = function(options) {
		alert(options.count)
    var defaults = {
        'speed': '5000',
        'count':8
    };
    var settings = $.extend({},defaults, options);//将一个空对象做为第一个参数

    // settings.count
	  var curIndex = 0,len=0,itemLength=0,lastActiveIndex=0,$JList=null,$JListItem=null,oldLeftVal=0,newLeftVal = 0,offsetsize=0;
		var oldBorderLeftVal=0,newBorderLeftVal=0,$optionBorder=null,timer = null;
		
		$JList = $('.J_list');
		$JListItem = $(".J_list .item");
		$optionBorder = $(".option-border");
		// 元素个数
		len = $JListItem.length;
		// 单个item项的宽度
		itemLength = $JListItem.css("width");
		startPlay();
		$JListItem.each(function(){
			$(this).click(function(){
				clearInterval(timer);
				// 最后一个点击项
				lastActiveIndex = curIndex;
				curIndex = $(this).index();
				oldLeftVal = $JList.css('left');
				// 当前不可点击
				if(curIndex==lastActiveIndex){
					return;
				}
				// 前三个
				if(curIndex<3){
					newLeftVal = 0;
				}else{
					if(curIndex<lastActiveIndex && curIndex<len-3){//点左侧->向右偏移
						console.log(1)
						offsetsize = parseInt(itemLength);
						newLeftVal = parseInt(oldLeftVal)+offsetsize;
					}else if(curIndex>lastActiveIndex){// 右侧->向左偏移
						console.log(2)
						if(curIndex>2 && curIndex<len-2){
							if(lastActiveIndex<3){
								newLeftVal = parseInt(oldLeftVal)-(curIndex-2)*parseInt(itemLength);
							}else{
								offsetsize = (curIndex-lastActiveIndex)*parseInt(itemLength)
								newLeftVal = parseInt(oldLeftVal)-offsetsize;
							}
						}
						if(curIndex==len-2 && lastActiveIndex<len-3){
							newLeftVal =parseInt(oldLeftVal)-parseInt(itemLength);
						}
					}
				}
				borderAni();
				$JList.animate({'left':newLeftVal});
				$JListItem.removeClass('active');
				$(this).addClass('active');
				startPlay();
				console.log('click curIndex',lastActiveIndex,curIndex,oldLeftVal,newLeftVal)
			});
		});
		function borderAni(){
			oldBorderLeftVal = $optionBorder.css('left');
			if(curIndex==0){
				newBorderLeftVal = 0;
			}else{
				if(curIndex>lastActiveIndex){//往右
					if(curIndex>0 && curIndex<3 || curIndex>len-3){
						if(curIndex==len-2){
							newBorderLeftVal = parseInt(oldBorderLeftVal)+parseInt(itemLength);
						}else{
							newBorderLeftVal = parseInt(oldBorderLeftVal)+(curIndex-lastActiveIndex)*parseInt(itemLength);
						}
					}else{//2<curIndex<len-2
						newBorderLeftVal = 2*parseInt(itemLength);
					}
				}else{//往左
					if(curIndex<2 || curIndex>len-4){
						if(curIndex==1){
							newBorderLeftVal = parseInt(itemLength);
						}else{
							newBorderLeftVal = parseInt(oldBorderLeftVal)-(lastActiveIndex-curIndex)*parseInt(itemLength);
						}
					}else{
						newBorderLeftVal = 2*parseInt(itemLength);
					}
				}
			}
			$optionBorder.animate({'left':newBorderLeftVal});
			console.log('optionBorder',lastActiveIndex,curIndex,oldBorderLeftVal,newBorderLeftVal)
		}
		function startPlay(){
			if(timer){
				clearInterval(timer);
				timer = null;
			}
			timer = setInterval(autoPlay,settings.speed);
		}
		function autoPlay(){
			lastActiveIndex = curIndex;
			if(curIndex<len-1){
				curIndex++;
			}else{
				curIndex=0
			}
			oldLeftVal = $JList.css('left');
			if(curIndex>2 && curIndex<len-2){// 前3个和后3个不偏移
				newLeftVal = parseInt(oldLeftVal)-parseInt(itemLength);
			}
			if(curIndex<3){
				newLeftVal = 0;
			}
			borderAni();
			$JList.animate({'left':newLeftVal});
			$JListItem.removeClass('active');
			$JListItem.eq(curIndex).addClass("active");
			console.log('curIndex',curIndex,oldLeftVal,newLeftVal)
		}
	}
})(jQuery,window,document);