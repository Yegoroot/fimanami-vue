import Vue from 'vue'
import Router from 'vue-router'
// import EventList from './views/EventList.vue'
// import EventShow from './views/EventShow.vue'
import NotFoundComponent from './views/FileNotFound.vue'

import Index from './views/Index.vue'
import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'
import MainNavbar from './layout/MainNavbar.vue'
import MainFooter from './layout/MainFooter.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'index',
			components: { default: Index, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: 'black' }
			}
		},
		{
			path: '/landing',
			name: 'landing',
			components: { default: Landing, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: 'black' }
			}
		},
		{
			path: '/login',
			name: 'login',
			components: { default: Login, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 }
			}
		},
		{
			path: '/profile',
			name: 'profile',
			components: { default: Profile, header: MainNavbar, footer: MainFooter },
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: 'black' }
			}
		},
		{
			path: '*',
			component: NotFoundComponent
		}
	],
	scrollBehavior: to => {
		if (to.hash) {
			return { selector: to.hash }
		} else {
			return { x: 0, y: 0 }
		}
	}
})
