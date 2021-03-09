import Vue from 'vue'
import App from './App.vue'
import Icon from "./icon";
// import ButtonGroup from './button-group'


Vue.config.productionTip = false

Vue.component('a-icon', Icon)
// Vue.component('g-button-group', ButtonGroup)
new Vue({
    render: h => h(App),

}).$mount('#app')
