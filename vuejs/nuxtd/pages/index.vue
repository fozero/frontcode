<template>
  <section class="container">
    <div class="title">index</div> 
    <nuxt-link to="/about">关于</nuxt-link>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  data () {
    return {
      msg: 'hello'
    }
  },
  created:function(){
    this.loadData();
  },
  methods: {
    loadData:function(){
      // axios.get('/api/list')
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    },
    login: function() {
    }
  }
}
</script>

<style lang="scss">
.container {
  // min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  .title {
    font-size: 20px;
  }
}

// .title {
//   font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
//     'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//   display: block;
//   font-weight: 300;
//   font-size: 100px;
//   color: #35495e;
//   letter-spacing: 1px;
// }
</style>
