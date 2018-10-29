<template>
  <div class="paging clearfix">
  	 <div class="page-size fl" v-if="isShowTotal">共{{total}}条</div>
	   <ul class="page-list fl clearfix">
			<li @click="changePage(currentPage-1)">上一页</li>
			<li :class="{'active':currentPage==item.val}" v-for="item in pagelist" v-text="item.text" @click="changePage(item.val)">1</li>
			<li @click="changePage(currentPage+1)">下一页</li>
		</ul>
		<div class="page-jump fl" v-if="isShowJumper">
			前往<input class="input" type="text" v-model="toPage" @keydown="submit(toPage,$event)">页
			<!-- <button  @click="changePage(toPage)">确定</button> -->
		</div>
  </div>
</template>

<script>
export default {
  name: 'Paging',
  // props:[
  // 	'name'
  // ],
  // prop验证
  props:{
  	name:String,
  	pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    layout:{
    	type: String
    }
  },
  data () {
    return {
			isShowJumper:false,
			isShowTotal:false,
  		toPage:'',//跳转到x页
			pageGroup:10//可见分页数量 默认10个分页数
    }
  },
  created: function () {
		console.log('created');
		this.isShowTotal = this.layout.indexOf('total')!==-1;
		this.isShowJumper = this.layout.indexOf('jumper')!==-1;
	},
	mounted: function () {
		console.log('mounted',this.layout);
	},
	computed:{
		totalPage:function(){
			return Math.ceil(this.total / this.pageSize)
		},
		pagelist:function(){
			var list = [];
			var count = Math.floor(this.pageGroup/2), center = this.currentPage;
			var left = 1,right = this.totalPage;

			if(this.totalPage>this.pageGroup){
				if(this.currentPage>count+1){
					if(this.currentPage < this.totalPage - count){
						left = this.currentPage - count;
						right = this.currentPage + count-1;
					}else{
						left = this.totalPage - this.pageGroup+1;
					}
				}else{
					right = this.pageGroup;
				}
			}

			// 遍历添加到数组里
			while(left<=right){
				list.push({
					text:left,
					val:left
				});
				left++;
			}
			return list;
		}
	},
  methods:{
  	// 回车事件
  	submit(toPage,e){
  		// console.log('e.keyCode',toPage,e.keyCode)
        // key.Code === 13表示回车键 
        if(e.keyCode === 13){
            //逻辑处理
            this.changePage(toPage);
        }
    },
  	changePage:function(idx){
  		if(idx!=this.currentPage && idx>0 && idx<=this.totalPage){
	  		// 触发父组件事件  pageChange会转换成小写pagechange
	  		this.$emit('change',{curPage:Number(idx)});
			}
  	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
		padding: 0;
		margin: 0;
}
.fl{
	float: left;
}
.clearfix:after{
	display: block;
	content: '';
	clear: both;
}
.page-size{
	    height: 26px;
    line-height: 26px;
}
.page-list{

}
.page-jump{
	    height: 26px;
    line-height: 26px;
    margin-left: 20px;
}
.page-jump .input{
	width: 32px;
	    padding: 4px 2px;
    border-radius: 2px;
    border: 1px solid #dcdfe6;
    margin: 0 4px;
}
	ul{
		list-style: none;
	}
	ul li{
		float: left;
		color: #606266;
		background: #f4f4f5;
		padding: 2px 8px;
		cursor: pointer;
		border-radius: 2px;
		margin: 0 5px;
	}
	ul>li.active{
		background: #409eff;
		color:#fff;
	}
</style>
