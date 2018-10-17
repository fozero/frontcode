// ===============base  
const baseData = [
		  { genre: 'Sports', sold: 275 },
		  { genre: 'Strategy', sold: 115 },
		  { genre: 'Action', sold: 120 },
		  { genre: 'Shooter', sold: 350 },
		  { genre: 'Other', sold: 150 }
		]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
		// Step 1: 创建 Chart 对象
		const baseChart = new G2.Chart({
		  container: 'base', // 指定图表容器 ID
		  // width : 600, // 指定图表宽度
		  forceFit: false,//宽度自适应
		  height : 300, // 指定图表高度
  		  animate: true // 关闭图表动画
		});
		// Step 2: 载入数据源
		baseChart.source(baseData);
		// Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
		baseChart.interval().position('genre*sold').color('genre')
		// Step 4: 渲染图表
		baseChart.render();




// =================双轴图表
var chart = new G2.Chart({
  container: 'multYData',
  forceFit: false,
  // height: window.innerHeight
  height: 300
});
chart.source(multYData, {
  call: {
    min: 0
  },
  people: {
    min: 0
  },
  waiting: {
    min: 0
  }
});
chart.legend({
  custom: true,
  allowAllCanceled: true,
  items: [{
    value: 'waiting',
    marker: {
      symbol: 'square',
      fill: '#3182bd',
      radius: 5
    }
  }, {
    value: 'people',
    marker: {
      symbol: 'hyphen',
      stroke: '#fdae6b',
      radius: 5,
      lineWidth: 3
    }
  }],
  onClick: function onClick(ev) {
    var item = ev.item;
    var value = item.value;
    var checked = ev.checked;
    var geoms = chart.getAllGeoms();
    for (var i = 0; i < geoms.length; i++) {
      var geom = geoms[i];
      if (geom.getYScale().field === value) {
        if (checked) {
          geom.show();
        } else {
          geom.hide();
        }
      }
    }
  }
});
chart.axis('people', {
  grid: null,
  label: {
    textStyle: {
      fill: '#fdae6b'
    }
  }
});
chart.interval().position('time*waiting').color('#3182bd');
chart.line().position('time*people').color('#fdae6b').size(8).shape('smooth');//size(8)设置line的大小   color('#fdae6b')颜色
chart.point().position('time*people').color('#fdae6b').size(8).shape('circle'); //shape图形类型  smooth circle和 其他triangle
chart.render();





// ===============面积图
// mask时间格式同 https://momentjs.com/docs/#/displaying/format/
// scale度量
// linear 一组数据：[1, 2, 3, 4, 5]，除了通用的属性外，还包含以下自有属
// nice: {boolean}, // 默认为 true，用于优化数值范围，使绘制的坐标轴刻度线均匀分布。例如原始数据的范围为 [3, 97]，如果 nice 为 true，那么就会将数值范围调整为 [0, 100]
//   min: {number}, // 定义数值范围的最小值
//   max: {number}, // 定义数值范围的最大值
//   minLimit: {number}, // 对数据的最小值的限制，无论数据中是否存在比这个值小的数据，生成的坐标点不会小于这个值
//   maxLimit: {number}, // 对数据的最大值的限制，无论数据中是否存在比这个值大的数据，生成的坐标点不会大于这个值
//   tickCount: {number}, // 定义坐标轴刻度线的条数，默认为 5
//   tickInterval: {number}, // 用于指定坐标轴各个刻度点的间距，为原始数据值的差值，tickCount 和 tickInterval 不可以同时声明




// marker
// chart.legend({
//   title: null, // 不展示图例的标题
//   marker: 'square' // 设置图例 marker 的显示样式
// });
// 配置图例 marker 的显示样式，支持指定 point 几何标记支持的所有 shape(除去 'rect')：'circle', 'square', 'bowtie', 'diamond', 'hexagon', 'triangle', 'triangle-down', 'hollowCircle', 'hollowSquare', 'hollowBowtie', 'hollowDiamond', 'hollowHexagon', 'hollowTriangle', 'hollowTriangle-down', 'cross', 'tick', 'plus', 'hyphen', 'line'
		var areaChart = new G2.Chart({
		  container: 'area',
		  forceFit: false,
		  height: 300
		});
		areaChart.source(areaData,{
			'time': {
			    type: 'time',
	    		mask: 'HH'
			  }
		});
		// areaChart.scale({
		//   value: {
		//     min: 10000
		//   },
		//   time: {
		//     range: [0, 1]
		//   }
		// });
		areaChart.axis('value', {
		  label: {
		    formatter: function formatter(val) {
		      return (val / 10000).toFixed(1) + 'k';
		    }
		  }
		});
		areaChart.tooltip({
		  showTitle: false,
		  itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
		  crosshairs: {
		    type: 'line'
		  }
		});
		// color('type') 设置底部显示的label type在json中指定
		areaChart.area().position('time*value').color('type');
		areaChart.line().position('time*value').color('type').size(2);
		areaChart.render();


// ===============层叠面积图
//  mask: {string}, // 指定时间的显示格式，默认：'YYYY-MM-DD'
// 自动识别如下形式的时间格式，当用户需要生成 time 类型的度量时，建议将原始时间数据转换为如下形式
// 时间戳，如 1436237115500；
// 时间字符串： '2015-03-01'，'2015-03-01 12:01:40'，'2015/01/05'，'2015-03-01T16:00:00.000Z'。
		var areaStackChart = new G2.Chart({
		  container: 'area-stack',
		  forceFit: false,
		  height: 300,
		  padding: [ 60, 40, 95, 80 ] // 上，右，下，左
		});
		areaStackChart.source(areaStackData, {
		  // 'time': {
		  //   type: 'time',
    // 		mask: 'HH:mm'
    // 		// mask:'YYYY-MM-DD'
		  // }
		});
		areaStackChart.tooltip({
		  crosshairs: {
		    type: 'line'
		  }
		});
		// areaStackChart.scale({
		//   'time': {
		//     alias: '指标类型' // 为属性定义别名
		//   },
		//   'value': {
		//     alias: '数量' // 为属性定义别名
		//   }
		// });
		
		// 改变坐标轴显示的值
		areaStackChart.axis('time', {
		  label: {
		    formatter: function formatter(val) {
		      return val + '小时';
		    }
		  }
		});
		areaStackChart.axis('value', {
		  // line: {
		  //   stroke: 'red'
		  // },
		  label: {
		    formatter: function formatter(val) {
		      return val + '数量';
		    }
		  }
		});
		// 设置坐标显示label样式
		areaStackChart.axis('time', {
			// 配置time字段坐标轴颜色样式
		  line: {
		    stroke: 'red'
		  },
		  // 设置坐标轴的显示位置，可设置的值包含 top、bottom、left、right，即上下左右四个位置
		  // position:'left',
		  title: {
		  	textStyle: {
		      fontSize: 22, // 文本大小
		      textAlign: 'center', // 文本对齐方式
		      fill: 'red', // 文本颜色
		    }
		  }, // 展示 xField 对应坐标轴的标题   title: null // 不展示标题=
		});
		// 设置显示x,y轴标题 别名    该配置信息也可以在source方法里面配置
		areaStackChart.scale('time', {
			tickCount: 12, // 定义坐标轴刻度线的条数，默认为 5
		  alias: '时间日期',
		  type: 'time',
    	  mask: 'HH:mm',
    	  // mask:'YYYY/MM/DD'
		});

		// areaStackChart.scale('value', {
		//   alias: '数量'
		// });
		
		// 图例
		// 图例的显示位置，支持12个定位位置，配置值 'left-top','left-center','left-bottom','right-top','right-top','right-bottom',
		// 'top-left','top-center','top-bottom','bottom-left','bottom-center','bottom-right'。也可使用'left'(默认为left-bottom'),
		// 'right'(默认为'right-bottom'),'top'(默认为top-center'),'bottom'(默认为bottom-center')定位。
		areaStackChart.legend({ 
		  position: 'top-center', // 设置图例的显示位置
		  itemGap: 20, // 图例项之间的间距
		  title: null, // 不展示图例的标题
  		  marker: 'square' ,// 设置图例 marker 的显示样式  circle
  		  // unCheckColor:'#eee',//为选中图例的颜色
  		  // textStyle:{fill: '#333'}
  		  // 显示文本格式化处理  回调函数
  		  itemFormatter:function(val){
			return val+'test';
			}
		});
		areaStackChart.areaStack().position('time*value').color('type');
		areaStackChart.lineStack().position('time*value').color('type').size(2);
		areaStackChart.render();


// ====================层叠面积图双轴
var areaStackMChart = new G2.Chart({
		  container: 'area-mstack',
		  forceFit: false,
		  height: 300,
		  padding: [ 60, 40, 95, 80 ] // 上，右，下，左
		});
		areaStackMChart.source(areaStackMData, {
		});
		areaStackMChart.tooltip({
		  crosshairs: {
		    type: 'line'
		  }
		});
		// 改变坐标轴显示的值
		areaStackMChart.axis('time', {
		  label: {
		    formatter: function formatter(val) {
		      return val + '小时';
		    }
		  }
		});
		areaStackMChart.axis('value', {
		  label: {
		    formatter: function formatter(val) {
		      return val + '数量';
		    }
		  }
		});
		// 设置坐标显示label样式
		areaStackMChart.axis('time', {
			// 配置time字段坐标轴颜色样式
		  line: {
		    stroke: 'red'
		  },
		  title: {
		  	textStyle: {
		      fontSize: 22, // 文本大小
		      textAlign: 'center', // 文本对齐方式
		      fill: 'red', // 文本颜色
		    }
		  }, // 展示 xField 对应坐标轴的标题   title: null // 不展示标题=
		});
		// 设置显示x,y轴标题 别名    该配置信息也可以在source方法里面配置
		areaStackMChart.scale('time', {
			tickCount: 12, // 定义坐标轴刻度线的条数，默认为 5
		  alias: '时间日期',
		  type: 'time',
    	  mask: 'HH:mm',
    	  // mask:'YYYY/MM/DD'
		});
		areaStackMChart.legend({ 
		  position: 'top-center', // 设置图例的显示位置
		  itemGap: 20, // 图例项之间的间距
		  title: null, // 不展示图例的标题
  		  marker: 'square' ,// 设置图例 marker 的显示样式  circle
  		  itemFormatter:function(val){
			return val+'test';
			}
		});

		areaStackMChart.areaStack().position('time*value').color('type');
		areaStackMChart.lineStack().position('time*value').color('type').size(2);
		// 双轴显示
		areaStackMChart.areaStack().position('time*value2').color('type');
		areaStackMChart.lineStack().position('time*value2').color('type').size(2);
		areaStackMChart.render();


// ===============饼图
		var pieChart = new G2.Chart({
		  container: 'pie',
		  forceFit: false,
		  height: 300
		});
		pieChart.source(pieData, {
		  percent: {
		    formatter: function formatter(val) {
		      val = val * 100 + '%';
		      return val;
		    }
		  }
		});
		pieChart.coord('theta', {
		  radius: 0.75
		});
		pieChart.tooltip({
		  showTitle: false,
		  itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
		});
		pieChart.intervalStack().position('percent').color('item').label('percent', {
		  formatter: function formatter(val, item) {
		    return item.point.item + ': ' + val;
		  }
		}).tooltip('item*percent', function(item, percent) {
		  percent = percent * 100 + '%';
		  return {
		    name: item,
		    value: percent
		  };
		}).style({
		  lineWidth: 1,
		  stroke: '#fff'
		});
		pieChart.render();

// ===============折线图
var lineChart = new G2.Chart({
  container: 'line',
  forceFit: false,
  height: 300
});
lineChart.source(lineData);
lineChart.scale('value', {
  min: 0
});
lineChart.scale('year', {
  range: [0, 1]
});
lineChart.tooltip({
  crosshairs: {
    type: 'line'
  }
});
lineChart.line().position('year*value');
lineChart.point().position('year*value').size(4).shape('circle').style({
  stroke: '#fff',
  lineWidth: 1
});
lineChart.render();

// ===============多条折线图
		var lineMultChart = new G2.Chart({
		  container: 'line-mult',
		  // forceFit: true,
		  width:600,
		  height: 300
		});
		lineMultChart.source(lineMultData, {
		  month: {
		    range: [0, 1]
		  }
		});
		lineMultChart.tooltip({
		  crosshairs: {
		    type: 'line'
		  }
		});
		lineMultChart.axis('temperature', {
		// 	line: null,
  // tickLine: null,
		  label: {
		    formatter: function formatter(val) {
		      return val + '°C';
		    }
		  }
		});
		lineMultChart.line().position('month*temperature').color('city');
		lineMultChart.point().position('month*temperature').color('city').size(4).shape('circle').style({
		  stroke: '#fff',
		  lineWidth: 1
		});
		// 图例  用来过滤
		lineMultChart.legend({ 
		  position: 'bottom', // 设置图例的显示位置
		  itemGap: 20, // 图例项之间的间距
		  title: null, // 不展示图例的标题
  			marker: 'square' // 设置图例 marker 的显示样式
		});
		lineMultChart.render();



		// ===============环图
		var loopChart = new G2.Chart({
		  container: 'loop',
		  forceFit: false,
		  height: 300,
		  animate: true
		});
		// 装载数据
		loopChart.source(loopData, {
		  percent: {
		    formatter: function formatter(val) {
		      val = val * 100 + '%';
		      return val;
		    }
		  }
		});
		// 设置坐标系
		loopChart.coord('theta', {
		  radius: 0.75,
		  innerRadius: 0.6
		});
		// 提示
		loopChart.tooltip({
		  showTitle: false,
		  itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
		});
		// 辅助文本
		// loopChart.guide().html({
		//   position: ['50%', '50%'],
		//   html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
		//   alignX: 'middle',
		//   alignY: 'middle'
		// });
		var interval = loopChart.intervalStack().position('percent').color('item').label('percent', {
		  formatter: function formatter(val, item) {
		    return item.point.item + ': ' + val;
		  }
		}).tooltip('item*percent', function(item, percent) {
		  percent = percent * 100 + '%';
		  return {
		    name: item,
		    value: percent
		  };
		}).style({
		  lineWidth: 1,
		  stroke: '#fff'
		});
		loopChart.render();
		// 当前选中
		// interval.setSelected(loopData[0]);
