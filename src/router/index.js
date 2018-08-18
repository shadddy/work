import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstPage from '@/pages/first'
import secondPage from '@/pages/second'
import thirdPage from '@/pages/third'

Vue.use(Router)

export default new Router({
	linkActiveClass:'my-active',
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage,
    },{
    	path:'/second',
    	name:'secondPage',
    	component:secondPage
    },{
    	path:'/third',
    	name:'thirdPage',
    	component:thirdPage
    }
  ]
})
