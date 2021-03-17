<template>
  <div class="tabs-item" @click="xx" :class="classes">

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AisakaTTabsItem",
  inject: ['eventBus'],
  data() {//不需要用户传值 自身维护值
    return {
      active: false
    }
  },
  props: {//需要用户 （前端开发者）传值
    // active:{
    //   type:Boolean,
    //   default:false
    // },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })

  },
  methods: {
    xx() {
      if (!this.disabled){
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$blue: rgba(61, 158, 255);
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;


  &.active {
    color: $blue;
    font-weight: bold;
  }
}
.disabled{
  color: grey;
  cursor: not-allowed;
}
</style>