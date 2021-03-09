<template>
  <svg class="a-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss">
.a-icon {
  width: 1em;
  height: 1em;
}

</style>