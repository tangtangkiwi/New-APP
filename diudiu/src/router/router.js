import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '@/components/welcome.vue'
import Home from '@/components/home.vue'

var router=new VueRouter({
	routes:[{
		path:'/',
		component:Welcome
	},{
		path:'/home',
		component:Home
	}]
})





export default router;