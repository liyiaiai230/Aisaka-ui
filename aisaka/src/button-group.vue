<template>
  <div class="a-button-group">
    <slot>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'AisakaButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`a-button-group 的子元素应该全是 a-button 但是你写的是 ${node.nodeName}`)
      }
    }
  },
}
</script>
<style lang="scss" scoped>
$border-radius: 4px;
.a-button-group {
  display: inline-flex;
  vertical-align: middle;


  > .a-button {
    border-radius: 0;
    margin: auto;

    &:not(:first-child) {
      margin-left: -1px;

    }


    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>