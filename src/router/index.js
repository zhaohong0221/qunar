import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'home',
    	component: home
    },
    {
    	path: '/detail/:id',
    	name: 'detail',
    	component: detail
    }
  ]
})
