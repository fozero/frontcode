/*
* @Author: fozero@126.
* @Date:   2019-03-13 11:37:18
* @Last Modified by:   fozero
* @Last Modified time: 2019-03-14 10:55:46
*/
;(function($,window,document,undefiend){
        var radius = 90;
		var d = 200;
		// var dtr = Math.PI / 180;
		// Math.PI 3.141592653589793
		var dtr = Math.PI / 120;
		var mcList = [];
		var lasta = 1;
		var lastb = 1;
		var distr = true;
		var tspeed = 11;
		var size = 200;
		var mouseX = 0;
		var mouseY = 10;
		var howElliptical = 1;
		var aA = null;
		var oDiv = null;
	// 构造函数
	var TagsCloud = function (ele,options) {
        var defaults = {
            color:["#ff9999","#35d2f4","#9ee353","#9d77ff","#4785d9","#ff9333","#5bdea8","#51befc"],
            wrap:ele
        };
        this.settings = $.extend({},defaults,options||{});
        this.init();
    };
	TagsCloud.prototype={
		init: function(name) {
	        var i=0;
			var oTag=null;
			oDiv=document.getElementById('tagscloud');
			aA=oDiv.getElementsByTagName('a');
			// 遍历tagscloud下所有子节点,获取每个子节点的offsetWidth和offsetHeight以对象形式保存到mcList中
			for(i=0;i<aA.length;i++)
			{
				console.log('offsetWidth',aA[i].offsetWidth)
				oTag={};
				oTag.offsetWidth = aA[i].offsetWidth;
				oTag.offsetHeight = aA[i].offsetHeight;
				mcList.push(oTag);
			}
			// console.log('mcList',mcList)
			this.sineCosine( 0,0,0 );
			this.positionAll();
			// this.preUpdate();
			var that = this;
			(function () {
		            that.update();
		            setTimeout(arguments.callee, 40);
		        })();
	    },
	    preUpdate:function(){
	    	console.log(1111111111)
	    	// var that = this;
	    	// new TagsCloud().update();
	    	// setTimeout(arguments.callee, 3000);
	    },
	    update:function(){
	    	var a, b, c = 0;
		        a = (Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed;
		        b = (-Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed;
		        lasta = a;
		        lastb = b;
		        if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
		            return;
		        }
		        this.sineCosine(a, b, c);
		        for (var i = 0; i < mcList.length; i++) {
		            if (mcList[i].on) {
		                continue;
		            }
		            var rx1 = mcList[i].cx;
		            var ry1 = mcList[i].cy * ca + mcList[i].cz * (-sa);
		            var rz1 = mcList[i].cy * sa + mcList[i].cz * ca;

		            var rx2 = rx1 * cb + rz1 * sb;
		            var ry2 = ry1;
		            var rz2 = rx1 * (-sb) + rz1 * cb;

		            var rx3 = rx2 * cc + ry2 * (-sc);
		            var ry3 = rx2 * sc + ry2 * cc;
		            var rz3 = rz2;

		            mcList[i].cx = rx3;
		            mcList[i].cy = ry3;
		            mcList[i].cz = rz3;

		            per = d / (d + rz3);

		            mcList[i].x = (howElliptical * rx3 * per) - (howElliptical * 2);
		            mcList[i].y = ry3 * per;
		            mcList[i].scale = per;
		            var alpha = per;
		            alpha = (alpha - 0.6) * (10 / 6);
		            mcList[i].alpha = alpha * alpha * alpha - 0.2;
		            mcList[i].zIndex = Math.ceil(100 - Math.floor(mcList[i].cz));
		        }
		        this.doPosition();
	    },
	    positionAll:function(){
	    	var phi = 0;
		    var theta = 0;
		    var max = mcList.length;
		    for (var i = 0; i < max; i++) {
		        if (distr) {
		            phi = Math.acos(-1 + (2 * (i + 1) - 1) / max);
		            theta = Math.sqrt(max * Math.PI) * phi;
		        } else {
		            phi = Math.random() * (Math.PI);
		            theta = Math.random() * (2 * Math.PI);
		        }
		        //坐标变换
		        mcList[i].cx = radius * Math.cos(theta) * Math.sin(phi);
		        mcList[i].cy = radius * Math.sin(theta) * Math.sin(phi);
		        mcList[i].cz = radius * Math.cos(phi);


		        console.log('a',i)
		        // aA[i].style.left = mcList[i].cx + oDiv.offsetWidth / 2 - mcList[i].offsetWidth / 2 + 'px';
		        // aA[i].style.top = mcList[i].cy + oDiv.offsetHeight / 2 - mcList[i].offsetHeight / 2 + 'px';
		    }
	    },
	    doPosition:function(){
	    	var l = oDiv.offsetWidth / 2;
	        var t = oDiv.offsetHeight / 2;
	        for (var i = 0; i < mcList.length; i++) {
	            if (mcList[i].on) {
	                continue;
	            }
	            var aAs = aA[i].style;
	            if (mcList[i].alpha > 0.8) {
	                if (aAs.display != '')
	                    aAs.display = '';
	            } else {
	                if (aAs.display != 'none')
	                    aAs.display = 'none';
	                continue;
	            }
	            aAs.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
	            aAs.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px';
	            // aAs.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';
	            // aAs.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+100*mcList[i].alpha+")";
	            aAs.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
	            aAs.zIndex = mcList[i].zIndex;
	            aAs.opacity = mcList[i].alpha;
	        }
	    },
	    sineCosine:function(a, b, c){
	    	sa = Math.sin(a * dtr);
		    ca = Math.cos(a * dtr);
		    sb = Math.sin(b * dtr);
		    cb = Math.cos(b * dtr);
			sc = Math.sin(c * dtr);
			cc = Math.cos(c * dtr);
	    }
	}
	$.fn.tagsCloud = function(opt){
		var tagsCloud = new TagsCloud(this,opt);
	};
})(jQuery,window,document);