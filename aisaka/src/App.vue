<template>
  <div id="app">
<button @click="showToast">出来吧！Toast</button>
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
    showToast() {
      this.$toast('我真帅', {
        enableHtml: false
      })
    }
  }
}
</script>

<style lang="scss">
@import "./style.css";
</style>
