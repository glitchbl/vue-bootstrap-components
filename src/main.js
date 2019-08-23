import Vue from 'vue'
import App from './App.vue'

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
// eslint-disable-next-line no-empty
} catch (e) {}

require('bootstrap/dist/css/bootstrap.min.css')
require('@fortawesome/fontawesome-free/css/all.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')