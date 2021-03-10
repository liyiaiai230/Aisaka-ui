<template>
  <div id="app">
    <div class="box">
      <a-input value="狸一" disabled></a-input>
      <a-input value="狸二" readonly></a-input>
      <a-input value="狸三"></a-input>
    </div>
    <div class="box">
      <a-input value="狸四" error="姓名不能少于两个字"></a-input>
    </div>
    <div class="box">
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
