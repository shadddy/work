import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstPage from '@/pages/first'
import secondPage from '@/pages/second'
import thirdPage from '@/pages/third'
import forthPage from '@/pages/forth'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'firstPage',
		component: firstPage,
		meta: {
			keepAlive: true
		}
	}, {
		path: '/second',
		name: 'secondPage',
		component: secondPage,
		meta: {
			keepAlive: true
		}
	}, {
		path: '/third',
		name: 'thirdPage',
		component: thirdPage,
		meta: {
			keepAlive: true
		}
	}, {
		path: '/forth',
		name: 'forthPage',
		component: forthPage,
		meta: {
			keepAlive: true
		}
	}]
})