<template>
  <div id="app" style="padding-left: 100px;">

    <div style="overflow: hidden; padding-top: 150px; padding-bottom: 40px;">
      <a-popover position="bottom">
        <template slot="content">
          <div>popover内容popover内容popover内容popover内容</div>
          <div>popover内容popover内容popover内容popover内容</div>
          <div>www<a href="http:qq.com">看新闻</a>内容</div>
        </template>
        <Button>点我</Button>
      </a-popover>
      <a-popover position="top">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <Button>点我</Button>
      </a-popover>
      <a-popover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <Button>点我</Button>
      </a-popover>
      <a-popover position="right">
        <template slot="content">
          <div>popover</div>
        </template>
        <Button>点我</Button>
      </a-popover>

    </div>

    <div style="overflow: hidden; padding-bottom: 150px;">
      <a-popover position="bottom" tirgger="hover">
        <template slot="content">
          <div>popover内容popover内容popover内容popover内容</div>
          <div>popover内容popover内容popover内容popover内容</div>
        </template>
        <Button>点我</Button>
      </a-popover>
      <a-popover position="top" tirgger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <Button>点我</Button>
      </a-popover>
      <a-popover position="left" tirgger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <Button>点我</Button>
      </a-popover>
      <a-popover position="right" tirgger="hover">
        <template slot="content">
          <div>popover <a href="http:qq.com">看新闻</a>内容</div>
        </template>
        <Button>点我</Button>
      </a-popover>

    </div>
  </div>
</template>
<script>
import ButtonGroup from './button-group';
import Vue from "vue";
import Button from './button'

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
  },
  components: {
    Button
  },
}

// methods:{
//   inputChange(e){
//     console.log(e.target.value)
//   }
// }


</script>

<style lang="scss">
@import "./style.css";
</style>
