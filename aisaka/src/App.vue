<template>
  <div id="app">
    <a-layout style="height: 100vh">
      <a-sider class="demo">sider</a-sider>
      <a-layout>
        <a-header class="demo">header</a-header>
        <a-content class="demo">content</a-content>
        <a-footer class="demo">footer</a-footer>
      </a-layout>
    </a-layout>
  </div>

</template>

<script>
// import Button from './button'
import ButtonGroup from './button-group'
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
  methods: {
    inputChange(xxxx) {
      console.log(xxxx.target.value)
    }
  },
}
</script>

<style lang="scss">
@import "./style.css";
</style>
