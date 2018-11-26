import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Welcome from '@/components/welcome.vue'
import Home from '@/components/home.vue'
import New from '@/components/new.vue'
import Form from '@/components/form.vue'
import Reset from '@/components/reset.vue'

var router = new VueRouter({
	routes:[{
		path:'/',
		component:Welcome
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/new',
		component:New
	},
	{
		path:'/form',
		component:Form
	},
	{
		path:'/reset',
		component:Reset
	}
	]
})





export default router;