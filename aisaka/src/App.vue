<template>
  <div id="app">
    <button @click="showToast1">出来吧! 狗屎郑爽</button>
    <button @click="showToast2">出来吧！吃屎郑爽</button>
    <button @click="showToast3">出来吧！垃圾郑爽</button>
  </div>
</template>

<script>
// import Button from './button'
import ButtonGroup from './button-group';
import Vue from "vue";


Vue.component('g-button-group', ButtonGroup)


export default {
  data: () => {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: 'hi',
    }
  },
  name: 'App',
  components: {
    // ButtonGroup,
    // Button,
  },
  created() {

  },

  methods: {
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
</script>

<style lang="scss">
@import "./style.css";
</style>
