/*
* @Author: fozero@126.
* @Date:   2018-11-26 14:43:39
* @Last Modified by:   fozero
* @Last Modified time: 2018-11-26 15:32:08
*/
$(function(){
	// 第一种方式 $.extend
	// jQuery身上添加一个静态方法
	$.extend({
	    sayHello: function(name) {
	        console.log('Hello,' + (name ? name : 'Dude') + '!');
	    }
	})
	$.sayHello(); //调用
	$.sayHello('Wayou'); //带参调用

	// 自定义console，输出特定格式的信息
	$.extend({
	    log: function(message) {
	        var now = new Date(),
	            y = now.getFullYear(),
	            m = now.getMonth() + 1, //！JavaScript中月分是从0开始的
	            d = now.getDate(),
	            h = now.getHours(),
	            min = now.getMinutes(),
	            s = now.getSeconds(),
	            time = y + '/' + m + '/' + d + ' ' + h + ':' + min + ':' + s;
	        console.log(time + ' My App: ' + message);
	    }
	})
	$.log('initializing...'); //调用

	// 第二种方式 由于第一种方式无法处理DOM元素以及将插件更好地运用于所选择的元素身上，此时需使用第二种方式
	$.fn.pluginName = function() {
		//在这里面,this指的是用jQuery选中的元素
	    //example :$('a'),则this=$('a')
	    this.css('color', 'red');
	    this.each(function() {
	        //对每个元素进行操作
	        $(this).append(' ' + $(this).attr('href'));
	    })
	}
	// $("a").pluginName();//在a标签元素上使用插件
	
	// 让插件接收参数  用户自定义颜色和字体大小
	// $.fn.myPlugin = function(options) {
	//     var defaults = {
	//         'color': 'red',
	//         'fontSize': '12px'
	//     };
	//     var settings = $.extend(defaults, options);
	//     return this.css({
	//         'color': settings.color,
	//         'fontSize': settings.fontSize
	//     });
	// }

	// 保护好默认参数 对上面做修改一下
	$.fn.myPlugin = function(options) {
	    var defaults = {
	        'color': 'red',
	        'fontSize': '12px'
	    };
	    var settings = $.extend({},defaults, options);//将一个空对象做为第一个参数
	    return this.css({
	        'color': settings.color,
	        'fontSize': settings.fontSize
	    });
	}
	// 面向对象改造插件、命名空间  使用自调用匿名函数包裹代码
	



});