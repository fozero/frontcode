<template>
  <div>
    <!-- 分页组件 -->
    <Paging 
      :name="name"
      @change="onPageChange"
      :page-size="size"
      :total="total"
      layout="jumper,total"
      :current-page="curPage"
    />
  </div>
</template>


<!-- 
Paging属性 
page-size 每页显示条目个数
total 总条目数
current-page 当前页数
layout 布局 默认不显示 jumper,total

Paging事件
change 当前页改变时触发
 -->
<script>

import Paging from '@/components/Paging';
export default {
  name: 'Index',
  components:{
  	Paging
  },
  data () {
    return {
      msg: 'hello',
      name:'阿健a',
      size:10,
      total:201,
      curPage:1
    }
  },
  methods:{
    onPageChange:function(page){
      this.curPage = page.curPage;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
