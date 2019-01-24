/*
* @Author: fozero@126.
* @Date:   2019-01-22 17:14:57
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-22 17:41:42
*/
define.config({'base': 'AM.base'});
define('base',function(){
	var utils = require('utils');
	console.log('isWeixin',utils.isWeixin())
	console.log('isHybird',utils.isHybird())
});