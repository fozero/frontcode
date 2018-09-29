

	 //构建一些随机数据点,网页切图价格这里替换成你的业务数据
	 var points = [];
	 var max = 0;
	 var width = document.body.clientWidth;
	 var height = document.body.clientHeight;
	 var len = 300;
	 while (len--) {
	     var val = Math.floor(Math.random()*100);
	     max = Math.max(max, val);
	     var point = {
	        x: Math.floor(Math.random()*width),
	        y: Math.floor(Math.random()*height),
	        value: val
	    };
	     points.push(point);
	 }
	    var dataPoint = {
	    max: max,
	    data: points
	};

	// var dataPoint = { 
	//   x: 5, // x coordinate of the datapoint, a number 
	//   y: 5, // y coordinate of the datapoint, a number
	//   value: 100 // the value at datapoint(x, y)
	// };
	var dataPoints = dataPoint;
	// var dataPoints = [dataPoint, dataPoint, dataPoint, dataPoint];
	