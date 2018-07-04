/**
 *
 * @authors fozero (fozero@126.com)
 * @date    2018-06-13
 */

const Bundler = require('parcel-bundler');
var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });


var file = './src/examples/app/index.html';

const bundler = new Bundler(file);


// const router = require('./router');
// app.use('/test', router);


// 让 express 使用 bundler 中间件，这将让 parcel 处理你 express 服务器上的每个请求
app.use(bundler.middleware());
// 监听 8080 端口
app.listen(8080,()=>{
	console.log('Server running at http://localhost:8080...')
});



