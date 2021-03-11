<template>
  <div id="app">
    <a-row>
      <a-col span="23" offset="1" :narrow-pc="{span:12, offset:12}">
        <div class="demo"></div>
      </a-col>
    </a-row>
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
