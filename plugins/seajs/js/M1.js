/*
* @Author: fozero@126.
* @Date:   2018-10-11 18:43:18
* @Last Modified by:   fozero
* @Last Modified time: 2018-10-11 23:37:44
*/
//M1.js
define(function(require,exports,module){
	var m2=require('./M2');
	  
	exports.run=function(){
	alert('M1');
	m2.run();
	}
});