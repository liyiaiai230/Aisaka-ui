<template>
  <div>
    <a-button>默认按钮</a-button>
    <a-button icon="shezhi">有icon的按钮</a-button>
    <a-button loading>加载中</a-button>
    <a-button icon="shezhi" :loading="loading1" @click="onClick">点击加载</a-button>
    <a-button disabled>禁用按钮</a-button>
  </div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  name: 'buttonDemos',
  components: {
    'a-button': Button,
  },
  data() {
    return {
      loading1: false
    }
  },
  methods: {
    onClick() {
      this.loading1 = !this.loading1
    }
  }
}
</script>
