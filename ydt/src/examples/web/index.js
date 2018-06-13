/**
 *
 * @authors fozero (fozero@126.com)
 * @date    2018-06-13
 */

// import $ from 'jquery';
import '../../assets/examples/web.less';

// $(function(){})    slimscroll插件  用于使一个div内容区域变成可滚动的
$(document).ready(function(){
	// $("#scrol-content").slimScroll({ height: '100%' , alwaysVisible:true});
	$("#scrol-content").slimScroll({ height: '122px' , alwaysVisible:false});
});