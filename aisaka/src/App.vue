<template>
  <div id="app">
    <Button :loading="loading1" @click="loading1 = !loading1">
      按钮
    </Button>
    <Button icon="shezhi" :loading="loading2"
            @click="loading2 =! loading2">
      按钮
    </Button>
    <Button icon="shezhi" icon-position="right" :loading="loading3"
            @click="loading3 = !loading3">
      按钮
    </Button>
    <!--      <a-icon name="xiazai"></a-icon>-->
    <button-group>
      <Button icon="zuo">上一页</Button>
      <Button>更多</Button>
      <Button icon="you-copy" icon-position="right">下一页</Button>
    </button-group>
  </div>

</template>

<script>
import Button from './button'
import ButtonGroup from './button-group'
import Vue from "vue";

Vue.component('g-button-group', ButtonGroup)


export default {
  data: () => {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
    }
  },
  name: 'App',
  components: {
    ButtonGroup,
    Button,
  }
}
</script>

<style lang="scss">
@import "./style.css";
</style>
