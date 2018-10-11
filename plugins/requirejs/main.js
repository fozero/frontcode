/*
* @Author: fozero@126.
* @Date:   2018-10-08 17:54:16
* @Last Modified by:   fozero
* @Last Modified time: 2018-10-11 16:28:17
*/
requirejs.config({
    "baseUrl": "js",
    "paths": {
      "util": "util",
      // "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});
// require(["helper/util"], function(util) {
//     console.log('main.js')
// });


require(["util"], function(util) {
    console.log('main.js222')
});