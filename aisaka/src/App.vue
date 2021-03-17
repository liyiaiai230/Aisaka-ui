<template>
  <div id="app" style="padding:100px;">
    <a-collapse :selected.sync="selectedTab" single>
      <a-collapse-item title="标题一" name="1">内容1</a-collapse-item>
      <a-collapse-item title="标题二" name="2">内容2</a-collapse-item>
      <a-collapse-item title="标题三" name="3">内容3</a-collapse-item>
    </a-collapse>
    {{ selectedTab }}
  </div>
</template>
<script>
import ButtonGroup from './button-group';
import Vue from "vue";
// import Button from './button'
Vue.component('a-button-group', ButtonGroup)


export default {

  name: 'App',
  data: () => {
    return {
      selectedTab: ['1', '2'],
      loading1: false,
      loading2:true,
      loading3:false,
      message:'hi'
    }
  },
  created() {

  },

  methods: {
    // yyy(data) {
    //   console.log('yyy')
    //   console.log(data)
    // },
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
    // Button
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
