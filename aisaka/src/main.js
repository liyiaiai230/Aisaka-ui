import Vue from 'vue'
import App from './App.vue'
import Icon from "./icon";
import Input from "./input"
import Row from './row'
import Col from './col'

Vue.config.productionTip = false

Vue.component('a-icon', Icon)
Vue.component('a-input', Input)
Vue.component('a-row', Row)
Vue.component('a-col', Col)


// Vue.component('g-button-group', ButtonGroup)
new Vue({
    render: h => h(App),

}).$mount('#app')
