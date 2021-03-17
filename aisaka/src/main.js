import Vue from 'vue'
import App from './App.vue'
import Icon from "./icon";
import Input from "./input"
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import pligin from './plugin'
import Tabs from "./tabs"
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import TabsHead from './tabs-head'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import ButtonGroup from './button-group';
import Button from './button'


Vue.config.productionTip = false

Vue.component('a-icon', Icon)
Vue.component('a-input', Input)
Vue.component('a-row', Row)
Vue.component('a-col', Col)
Vue.component('a-layout', Layout)
Vue.component('a-header', Header)
Vue.component('a-sider', Sider)
Vue.component('a-content', Content)
Vue.component('a-footer', Footer)
Vue.component('a-toast', Toast)
Vue.component('a-tabs', Tabs)
Vue.component('a-tabs-head', TabsHead)
Vue.component('a-tabs-body', TabsBody)
Vue.component('a-tabs-item', TabsItem)
Vue.component('a-tabs-pane', TabsPane)
Vue.component('a-popover', Popover)
Vue.component('a-collapse', Collapse)
Vue.component('a-collapse-item', CollapseItem)
Vue.component('a-button', Button)

Vue.use(pligin)


Vue.component('g-button-group', ButtonGroup)
new Vue({
    render: h => h(App),

}).$mount('#app')
