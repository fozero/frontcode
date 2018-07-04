/**
 *
 * @authors fozero (fozero@126.com)
 * @date    2018-06-13
 */

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.post('/test', function (req, res) {
	console.log('**********');
  res.json({msg:'hello'})
  // res.json(Mock.mock(cont))
});



module.exports = app;
