<template>
  <svg class="a-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'AisakaIcon',
  props: ['name'],
  mounted() {
    console.log(this.name)
  },
  methods: {}
}
import './svg'
</script>

<style lang="scss" scoped>
.a-icon {
  width: 1em;
  height: 1em;
}
</style>