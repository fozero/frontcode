/**
 *
 * @authors fozero (fozero@126.com)
 * @date    2018-06-13
 */
const Mock = require('mockjs');
const data = require('./data.json');
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
	console.log('**********req：'+JSON.stringify(req.body));
  // res.json({code:0,msg:'success',data:{ user: 'tobi'} })
  const content =  data.gameInfo;
  res.json(Mock.mock(content))
});



module.exports = app;
