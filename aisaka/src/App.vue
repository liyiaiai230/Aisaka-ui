<template>
  <div id="app">
    <a-tabs :selected.sync="selectedTab" @update:selected="yyy">
      <a-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <a-tabs-item name="woman">
          <a-icon name="setting"></a-icon>
          美女
        </a-tabs-item>
        <a-tabs-item name="finance" disabled>财经</a-tabs-item>
        <a-tabs-item name="sports">体育</a-tabs-item>
      </a-tabs-head>
      <a-tabs-body>
        <a-tabs-pane name="woman">美女相关</a-tabs-pane>
        <a-tabs-pane name="finance">财经相关</a-tabs-pane>
        <a-tabs-pane name="sports">体育相关</a-tabs-pane>
      </a-tabs-body>
    </a-tabs>
  </div>

</template>
<script>
// import Button from './button'
import ButtonGroup from './button-group';
import Vue from "vue";


Vue.component('g-button-group', ButtonGroup)


export default {
  name: 'App',
  data: () => {
    return {
      selectedTab: 'sports'
      // loading1: false,
      // loading2:true,
      // loading3:false,
      // message:'hi'
    }
  },
  created() {

  },

  methods: {
    yyy(data) {
      console.log('yyy')
      console.log(data)
    },
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`世界上谁最傻逼 ${parseInt(Math.random() * 100)}。'郑爽是傻逼'`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '确实',
          callback() {
            console.log('经过证实郑爽确实是傻逼')
          }
        },
        autoClose: false,
      })
    }
  }
}
// components:{
//   Button
//  },
// methods:{
//   inputChange(e){
//     console.log(e.target.value)
//   }
// }


</script>

<style lang="scss">
@import "./style.css";
</style>
