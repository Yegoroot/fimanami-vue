import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import MaterialKit from './plugins/material-kit'

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

/* _______________________________________
 *
 * GLOBAL COMPONENT AUTO REGISTRATION
 **/
const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/) // webpack require.context
requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName)
	const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))
	Vue.component(componentName, componentConfig.default || componentConfig) // регестрируем глобально комопонент
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
