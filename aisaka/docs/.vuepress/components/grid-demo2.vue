<template>
  <div>
    靠左
    <a-row align="left" class="rowDemo">
      <a-col span="6" style="background: lightskyblue;">col-6</a-col>
      <a-col span="6" style="background: deepskyblue;">col-6</a-col>
      <a-col span="6" style="background: DodgerBlue;">col-6</a-col>
    </a-row>
    居中
    <a-row align="center" class="rowDemo">
      <a-col span="6" style="background: lightskyblue;">col-6</a-col>
      <a-col span="6" style="background: deepskyblue;">col-6</a-col>
      <a-col span="6" style="background: DodgerBlue;">col-6</a-col>
    </a-row>
    靠右
    <a-row align="right" class="rowDemo">
      <a-col span="6" style="background: lightskyblue;">col-6</a-col>
      <a-col span="6" style="background: deepskyblue;">col-6</a-col>
      <a-col span="6" style="background: DodgerBlue;">col-6</a-col>
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
  background: #eee;
}
</style>
