/*
* @Author: fozero@126.
* @Date:   2018-10-11 18:41:55
* @Last Modified by:   fozero
* @Last Modified time: 2018-10-15 11:28:45
*/
define(function(require, exports, module){
  
	var $ = require('jquery');
	var m1=require('./js/M1');
	console.log('txt',$('.txt'))
	exports.init=function(){
		m1.run();
		// console.log('txt',$('.txt'))
	}
});