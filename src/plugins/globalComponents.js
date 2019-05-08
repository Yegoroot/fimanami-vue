import { DropDown } from '../components'
import { Parallax } from '../components'
import { VPopover } from 'v-tooltip'
import ArSen from '@/components/ar/ArSent' // предложение на арабском

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
	install(Vue) {
		Vue.component('drop-down', DropDown)
		Vue.component(Parallax.name, Parallax)
		Vue.component('v-popover', VPopover)
		Vue.component('ar-sent', ArSen)
	}
}

export default GlobalComponents

/* _______________________________________
 *
 * GLOBAL COMPONENT AUTO REGISTRATION
 **/

// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

// const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/) // webpack require.context
// requireComponent.keys().forEach(fileName => {
// 	const componentConfig = requireComponent(fileName)
// 	const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))
// 	Vue.component(componentName, componentConfig.default || componentConfig) // регестрируем глобально комопонент
// })
