import './mini-toastr.scss'
import Vue from 'vue'

import $toast from 'mini-toastr'
$toast.init()

// Add miniToastr to all Vue instances
window.$toast = Vue.prototype.$toast = $toast
