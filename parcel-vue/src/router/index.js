import Vue from 'vue'
import Router from 'vue-router'
// 全加载
// import Index from '../components/Index'
// 懒加载
// const Index = () => import('../components/Index')
// const Index = () => import('../views/Index')
const app = () => import('../test/app')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: app
  }]
})