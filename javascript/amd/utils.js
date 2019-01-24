/*
* @Author: fozero@126.
* @Date:   2019-01-22 17:02:49
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-22 17:41:23
*/
define.config({'utils': 'AM.utils'});
define('utils',function(){
	return {
		isWeixin() {
	      // 判断是否是微信
	      var ua = navigator.userAgent.toLowerCase();
	      return ua.match(/MicroMessenger/i) == "micromessenger";
	    },
	    isHybird() {
	      var userAgent = navigator.userAgent.toLowerCase()
	      if (userAgent.indexOf('xiaopeng') !== -1) {
	        return true
	      } else {
	        return false
	      }
	    },
	}
});