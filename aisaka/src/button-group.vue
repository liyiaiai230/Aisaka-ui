<template>
  <div class="g-button-group">
    <slot>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'ButtonGroup'
}
</script>
<style lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .g-button {
    border-radius: 0;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-botton-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>