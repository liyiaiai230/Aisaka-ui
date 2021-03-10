import Vue from 'vue'
import App from './App.vue'
import Icon from "./icon";
import Input from "./input"

Vue.config.productionTip = false

Vue.component('a-icon', Icon)
Vue.component('a-input', Input)

// Vue.component('g-button-group', ButtonGroup)
new Vue({
    render: h => h(App),

}).$mount('#app')
