/*
* @Author: fozero@126.
* @Date:   2019-01-22 16:14:24
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-22 17:37:55
*/
define.config({'page/a': 'AM.a'});
define('page/a',function(){
	var utils = require('utils');
	console.log('b',utils.isWeixin())
});