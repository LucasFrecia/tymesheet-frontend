import Vue from 'vue'

console.clear()

Vue.prototype.log = console.log.bind(console)

Vue.config.productionTip = false
Vue.config.devtools = true

export default ({ store }) => (window.store = store)
