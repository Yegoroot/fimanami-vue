import wrap from '@vue/web-component-wrapper'
import Vue from 'vue'
import ArSen from '@/components/ar/ArSent' // предложение на арабском

/* _______________________________________
 *
 * РЕГЕСТРИРУЕМ ВЕБ КОМПОНЕНТЫ
 **/
const CustomElement = wrap(Vue, ArSen)
window.customElements.define('ar-sent', CustomElement)
