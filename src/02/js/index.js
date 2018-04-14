var imgFile = []; //文件流
var imgSrc = []; //图片路径
var imgName = []; //图片名字
$(function(){
	// 鼠标经过显示删除按钮
	$('.content-img-list').on('mouseover','.content-img-list-item',function(){
		$(this).children('a').removeClass('hide');
	});
	// 鼠标离开隐藏删除按钮
	$('.content-img-list').on('mouseleave','.content-img-list-item',function(){
		$(this).children('a').addClass('hide');
	});
	// 单个图片删除
	$(".content-img-list").on("click",'.content-img-list-item a',function(){
	    	var index = $(this).attr("index");
			imgSrc.splice(index, 1);
			imgFile.splice(index, 1);
			imgName.splice(index, 1);
			var boxId = ".content-img-list";
			addNewContent(boxId);
			if(imgSrc.length<4){//显示上传按钮
				$('.content-img .file').show();
			}
	  });
	//图片上传
	$('#upload').on('change',function(){			
		
		if(imgSrc.length>=4){
			return alert("最多只能上传4张图片");
		}
		var imgSize = this.files[0].size;  //b
		if(imgSize>1024*1024*1){//1M
			return alert("上传图片不能超过1M");
		}
		console.log(this.files[0].type)
		if(this.files[0].type != 'image/png' && this.files[0].type != 'image/jpeg' && this.files[0].type != 'image/gif'){
			return alert("图片上传格式不正确");
		}

		var imgBox = '.content-img-list';
		var fileList = this.files;
		
		for(var i = 0; i < fileList.length; i++) {
			var imgSrcI = getObjectURL(fileList[i]);
			imgName.push(fileList[i].name);
			imgSrc.push(imgSrcI);
			imgFile.push(fileList[i]);
		}
		if(imgSrc.length==4){//隐藏上传按钮
			$('.content-img .file').hide();
		}
		addNewContent(imgBox);
		this.value = null;//解决无法上传相同图片的问题
	})

	//提交请求
    $('#btn-submit-upload').on('click',function(){
        // FormData上传图片
        var formFile = new FormData();
        // formFile.append("type", type); 
        // formFile.append("content", content); 
        // formFile.append("mobile", mobile); 
        // 遍历图片imgFile添加到formFile里面
        $.each(imgFile, function(i, file){
            formFile.append('myFile[]', file);
        });
        console.log(imgFile)
     //    $.ajax({
     //        url: 'http://zhangykwww.yind123.com/webapi/feedback',
     //        type: 'POST',
     //        data: formFile,
     //        async: true,  
     //        cache: false,  
     //        contentType: false, 
     //        processData: false, 
     //        // traditional:true,
     //        dataType:'json',
     //        success: function(res) {
     //            console.log(res);
     //            if(res.code==0){
     //                alert("您的意见反馈已提交，感谢您的宝贵意见")
     //    //             $("#adviceContent").val("");
    	// 			// $("#contact").val("");
     //            }else{
     //                alert(res.message);
     //                $('.content-img .file').show();
     //                $("#adviceContent").val("");
     //                $("#cotentLength").text("0/240");
    	// 			$("#contact").val("");
    	// 			imgSrc = [];imgFile = [];imgName = [];
					// addNewContent(".content-img-list");

					// $('.success-tips').removeClass('hide');
		   //      	var time = 3;
		   //      	var tipTimer = setInterval(function(){
		   //      		time--;
		   //      		if(time==0){
		   //      			$('.success-tips').addClass('hide');
		   //      			$('.success-tips .timer').text('3s');
		   //      			clearInterval(tipTimer);
		   //      		}else{
		   //      			$('.success-tips .timer').text(time+'s');
		   //      		}
		   //      	},1000);
     //            }
     //        }
     //    })
    });

});

//删除
function removeImg(obj, index) {
	imgSrc.splice(index, 1);
	imgFile.splice(index, 1);
	imgName.splice(index, 1);
	var boxId = ".content-img-list";
	addNewContent(boxId);
}

//图片展示
function addNewContent(obj) {
	// console.log(imgSrc)
	$(obj).html("");
	for(var a = 0; a < imgSrc.length; a++) {
		var oldBox = $(obj).html();
		$(obj).html(oldBox + '<li class="content-img-list-item"><img src="'+imgSrc[a]+'" alt=""><a index="'+a+'" class="hide delete-btn"><i class="ico-delete"></i></a></li>');
	}
}

//建立一個可存取到該file的url
function getObjectURL(file) {
	var url = null ;
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}