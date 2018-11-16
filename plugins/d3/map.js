/*
* @Author: fozero@126.
* @Date:   2018-11-16 21:41:35
* @Last Modified by:   fozero
* @Last Modified time: 2018-11-16 22:20:33
*/
var mapChart = mapChart || {};
(function (root, factory) {
	if(typeof module === "object" && module.exports) {
		module.exports = factory(root.mapChart);
	} else {
		root.mapChart = factory(root.mapChart);
	}
}(typeof window !== 'undefined' ? window : this, function (mapChart) {
	mapChart = mapChart || {};
	var width=500,height=400;
	mapChart.init = function () {
		console.log(11111111)
        var svg = d3.select("#chinaMap")
          .append("svg")
          .attr("width",width)
          .attr("height",height)
          .style("padding-top","50px");
        // 投影函数  经度纬度转换
        var projection = d3.geo.mercator()
          .center([107,31])
          .scale(400)
          .translate([width/2,height/2]);
        // 地理路径生成器
        var path = d3.geo.path()
          .projection(projection)
          .pointRadius(5);
        // 向服务器请求文件并绘制地图  必须是服务器
        d3.json("http://localhost:3000/china.json",function(error,toporoot){
          if(error)
              return console.error(error);
          //添加提示框的div
          var tooltip = d3.select("body").append("div")
              .attr("class","tooltip") //用于css设置类样式
              .style("position","absolute")
              .style("opacity",0);
          ////////////////////////////////
          var groups = svg.append("g");
          groups.selectAll("path")
            .data(toporoot.features)
            .enter()
            .append("path")
            .attr("class","province")
            .attr("d",path)
            // 设置显示颜色及边框
            .attr('stroke','white')
            .attr('fill','rgb(230, 230, 230)')
            // 鼠标进入事件
            .on("mouseover",function(d){
              console.log('d',d)
                list.forEach(function(ite,index){
                  if(ite.item==d.properties.name){
                    //设置tooltip文字
                    tooltip.html('<ul style="margin: 0;padding: 0;width: 200px;height: 100px;background: #fff;border: 1px solid #eee;border-radius: 5px;box-sizing: border-box;"><li class="title" style="background: #eee;display: flex;justify-content: space-between;padding: 5px;">'+d.properties.name+'</li><li style="display: flex;justify-content: space-between;padding: 5px;"><span class="label">订单</span><span class="value">'+ite.percent+'</span></li><li style="display: flex;justify-content: space-between;padding: 5px;"><span class="label">占比</span><span class="value">'+ite.count+'</span></li></ul>')
                            .style("left",(d3.event.pageX)+"px")
                            .style("top",(d3.event.pageY+20)+"px")
                            .style("opacity",1.0);
                    }
                    // d3.select(this).attr("fill","rgb(225, 225, 103)");
                })
            })
            .on("mouseout",function(d){
                tooltip.style("opacity",0); 
            });
          //  设置背景色
          list.forEach(function(ite,index){
            groups.selectAll("path").style("fill",function(d,i){
              if(ite.item==d.properties.name){
                  d3.select(this).attr("fill","rgb(235, 243, 252)");
              }
            })
          });
        })
	};
	return mapChart;
}));










