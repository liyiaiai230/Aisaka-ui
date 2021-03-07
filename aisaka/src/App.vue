<template>
  <div id="app">
    <Button icon="shezhi">
      按钮
    </Button>
    <Button icon="shezhi" icon-position="right">
      按钮
    </Button>
  </div>

</template>

<script>

import Button from './button'

export default {
  name: 'App',
  components:{
    Button
  }
}
</script>

<style lang="scss">
@import "./style.css";
</style>
