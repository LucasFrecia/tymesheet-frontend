import Vue from 'vue'

console.clear()

Vue.prototype.log = console.log.bind(console)

Vue.config.productionTip = false
Vue.config.devtools = false

export default ({ store }) => (window.store = store)
