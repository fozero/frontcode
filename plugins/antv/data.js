

// 图表数据
// 双轴图表
var multYData = [{
  time: '10:10',
  call: 4,
  waiting: 2,
  people: 2
}, {
  time: '10:15',
  call: 2,
  waiting: 6,
  people: 3
}, {
  time: '10:20',
  call: 13,
  waiting: 2,
  people: 5
}, {
  time: '10:25',
  call: 9,
  waiting: 9,
  people: 1
}, {
  time: '10:30',
  call: 5,
  waiting: 2,
  people: 3
}, {
  time: '10:35',
  call: 8,
  waiting: 2,
  people: 1
}, {
  time: '10:40',
  call: 13,
  waiting: 1,
  people: 2
}];

// 面积图
var areaData = [{
		  type: '浏览量',
		  time: '2018-03-01 08:00:00',
		  value: 15468
		}, {
		  type: '浏览量',
		  time: '2018-03-01 09:00:00',
		  value: 16100
		}, {
		  type: '浏览量',
		  time: '2018-03-01 10:00:00',
		  value: 15900
		}, {
		  type: '浏览量',
		  time: '2018-03-01 11:00:00',
		  value: 17409
		}, {
		  type: '浏览量',
		  time: '2018-03-01 12:00:00',
		  value: 17000
		}, {
		  type: '浏览量',
		  time: '2018-03-01 13:00:00',
		  value: 31056
		}, {
		  type: '浏览量',
		  time: '2018-03-01 14:00:00',
		  value: 31982
		}, {
		  type: '浏览量',
		  time: '2018-03-01 15:00:00',
		  value: 32040
		}, {
		  type: '浏览量',
		  time: '2018-03-01 16:00:00',
		  value: 33233
		}];



		// 层叠面积图
var areaStackData = [{
		  type: '浏览量',
		  time: '2015-03-01T16:00:00.000Z',
		  value: 502
		}, {
		  type: '访客数',
		  time: '2015-03-01T16:00:00.000Z',
		  value: 200
		},{
		  type: '浏览量',
		  time: '2015-03-01T16:10:00.000Z',
		  value: 809
		}, {
		  type: '访客数',
		  time: '2015-03-01T16:10:00.000Z',
		  value: 800
		},  {
		  type: '浏览量',
		  time: '2015-03-01T16:40:00.000Z',
		  value: 635
		} ,{
		  type: '访客数',
		  time: '2015-03-01T16:40:00.000Z',
		  value: 400
		},  {
		  type: '浏览量',
		  time: '2015-03-01T16:50:00.000Z',
		  value: 800
		} ,{
		  type: '访客数',
		  time: '2015-03-01T16:50:00.000Z',
		  value: 500
		}];



		// 层叠面积图  双轴
var areaStackMData = [{
		  type: '浏览量',
		  time: '2015-03-01T16:00:00.000Z',
		  value: 502,
		}, {
		  type: '访客数',
		  time: '2015-03-01T16:00:00.000Z',
		  value: 200,
		},{
		  type: '浏览量',
		  time: '2015-03-01T16:10:00.000Z',
		  value: 809,
		}, {
		  type: '访客数',
		  time: '2015-03-01T16:10:00.000Z',
		  value: 800,
		},  {
		  type: '浏览量',
		  time: '2015-03-01T16:40:00.000Z',
		  value: 635,
		} ,{
		  type: '访客数',
		  time: '2015-03-01T16:40:00.000Z',
		  value: 400,
		},  {
		  type: '浏览量',
		  time: '2015-03-01T16:50:00.000Z',
		  value: 800,
		} ,{
		  type: '访客数',
		  time: '2015-03-01T16:50:00.000Z',
		  value: 500,
		},{
		  type: '转化率',
		  time: '2015-03-01T16:00:00.000Z',
		  value2:0.1
		},{
		  type: '转化率',
		  time: '2015-03-01T16:20:00.000Z',
		  value2:0.3
		},{
		  type: '转化率',
		  time: '2015-03-01T16:30:00.000Z',
		  value2:0.5
		},{
		  type: '转化率',
		  time: '2015-03-01T16:50:00.000Z',
		  value2:0.4
		}];

		// ===============饼图
		var pieData = [{
		  item: '事例一',
		  count: 40,
		  percent: 0.4
		}, {
		  item: '事例二',
		  count: 21,
		  percent: 0.21
		}, {
		  item: '事例三',
		  count: 17,
		  percent: 0.17
		}, {
		  item: '事例四',
		  count: 13,
		  percent: 0.13
		}, {
		  item: '事例五',
		  count: 9,
		  percent: 0.09
		}];

		// ===============折线图
var lineData = [{
  year: '1991',
  value: 3
}, {
  year: '1992',
  value: 4
}, {
  year: '1993',
  value: 3.5
}, {
  year: '1994',
  value: 5
}, {
  year: '1995',
  value: 4.9
}, {
  year: '1996',
  value: 6
}, {
  year: '1997',
  value: 7
}, {
  year: '1998',
  value: 9
}, {
  year: '1999',
  value: 13
}];


// ===============多条折线图
		var lineMultData = [{
		  "month": "Jan",
		  "city": "Tokyo",
		  "temperature": 7
		}, {
		  "month": "Jan",
		  "city": "London",
		  "temperature": 3.9
		}, {
		  "month": "Feb",
		  "city": "Tokyo",
		  "temperature": 6.9
		}, {
		  "month": "Feb",
		  "city": "London",
		  "temperature": 4.2
		}, {
		  "month": "Mar",
		  "city": "Tokyo",
		  "temperature": 9.5
		}, {
		  "month": "Mar",
		  "city": "London",
		  "temperature": 5.7
		}, {
		  "month": "Apr",
		  "city": "Tokyo",
		  "temperature": 14.5
		}, {
		  "month": "Apr",
		  "city": "London",
		  "temperature": 8.5
		}, {
		  "month": "May",
		  "city": "Tokyo",
		  "temperature": 18.4
		}, {
		  "month": "May",
		  "city": "London",
		  "temperature": 11.9
		}, {
		  "month": "Jun",
		  "city": "Tokyo",
		  "temperature": 21.5
		}, {
		  "month": "Jun",
		  "city": "London",
		  "temperature": 15.2
		}, {
		  "month": "Jul",
		  "city": "Tokyo",
		  "temperature": 25.2
		}, {
		  "month": "Jul",
		  "city": "London",
		  "temperature": 17
		}, {
		  "month": "Aug",
		  "city": "Tokyo",
		  "temperature": 26.5
		}, {
		  "month": "Aug",
		  "city": "London",
		  "temperature": 16.6
		}, {
		  "month": "Sep",
		  "city": "Tokyo",
		  "temperature": 23.3
		}, {
		  "month": "Sep",
		  "city": "London",
		  "temperature": 14.2
		}, {
		  "month": "Oct",
		  "city": "Tokyo",
		  "temperature": 18.3
		}, {
		  "month": "Oct",
		  "city": "London",
		  "temperature": 10.3
		}, {
		  "month": "Nov",
		  "city": "Tokyo",
		  "temperature": 13.9
		}, {
		  "month": "Nov",
		  "city": "London",
		  "temperature": 6.6
		}, {
		  "month": "Dec",
		  "city": "Tokyo",
		  "temperature": 9.6
		}, {
		  "month": "Dec",
		  "city": "London",
		  "temperature": 4.8
		}];

		// ===============环图
		var loopData = [{
		  item: '直接访问',
		  count: 40,
		  percent: 0.4
		}, {
		  item: '百度',
		  count: 21,
		  percent: 0.21
		}, {
		  item: '搜狗',
		  count: 17,
		  percent: 0.17
		}, {
		  item: '神马搜索',
		  count: 13,
		  percent: 0.13
		}, {
		  item: '360搜索',
		  count: 9,
		  percent: 0.09
		}];