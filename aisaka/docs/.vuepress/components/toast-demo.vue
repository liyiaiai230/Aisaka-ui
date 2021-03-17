<template>
  <div style="padding-top: 16px;">
    <div>
      <a-button @click="$toast('出现在页面上方')">上方弹出</a-button>
      <a-button @click="$toast('出现在页面中间', {position:'middle'})">中间弹出</a-button>
      <a-button @click="$toast('出现在页面下方', {position:'bottom'})">下方弹出</a-button>
    </div>
  </div>
</template>
<style>
toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from '../../../src/plugin'
import AButton from '../../../src/button'
import Vue from 'vue'
Vue.use(plugin)
export default {
  components: {AButton},
  data () {
    return {


    }
  }
}
</script>