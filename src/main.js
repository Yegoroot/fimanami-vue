import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import MaterialKit from './plugins/material-kit'
import './plugins/webcomponents'

Vue.config.productionTip = false
Vue.use(MaterialKit)

const NavbarStore = {
	showNavbar: false
}

Vue.mixin({
	data() {
		return {
			NavbarStore
		}
	}
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
