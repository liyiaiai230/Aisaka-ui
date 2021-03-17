<template>
  <div>
    <a-row class="rowDemo">
      <a-col span="6" style="background: lightskyblue;">col-6</a-col>
      <a-col span="6" style="background: deepskyblue;">col-6</a-col>
      <a-col span="6" style="background: lightskyblue;">col-6</a-col>
      <a-col span="5" offset="1" style="background: deepskyblue;">
        col-5 offset-1
      </a-col>
    </a-row>
    <a-row class="rowDemo">
      <a-col span="6" style="background: lightskyblue;">col-6</a-col>
      <a-col span="6" style="background: deepskyblue;">col-6</a-col>
      <a-col span="4" offset="2" style="background: lightskyblue;">col-4 offset-2</a-col>
      <a-col span="5" offset="1" style="background: deepskyblue;">col-5 offset-1</a-col>
    </a-row>
  </div>
</template>

<script>
import Row from '../../../src/Row'
import Col from '../../../src/Col'

export default {
  components: {'a-row': Row, 'a-col': Col}
}
</script>

<style scoped>
.rowDemo {
  margin-top: 10px;
}
</style>