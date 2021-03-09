<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
          @click="$emit('click')">
    <a-icon class="icon" v-if="icon && !loading" :name="icon"></a-icon>
    <a-icon class="jiazai icon" v-if="loading" name="jiazai"></a-icon>
    <div class="content">
      <slot></slot>
    </div>

  </button>
</template>
<script>
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    }
  },
}
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-background);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-background);
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: .1em;
  }


  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em
    }

    > .content {
      order: 1;


    }
  }

  .jiazai {
    animation: spin 1s infinite linear;
  }
}
</style>