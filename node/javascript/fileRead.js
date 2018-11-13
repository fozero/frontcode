
// 
var request = require('request');

var url = 'http://127.0.0.1:7001/public/js/xptj.local.js';
request(url, function (error, response, body) {
	// console.log('response',response)
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
})