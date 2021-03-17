<template>
  <div class="normal">
    <a-row class="rowDemo">
      <a-col span="12" style="background: lightskyblue;">col-12</a-col>
      <a-col span="12" style="background: deepskyblue;">col-12</a-col>
    </a-row>
    <a-row class="rowDemo">
      <a-col span="8" style="background: lightskyblue;">col-8</a-col>
      <a-col span="8" style="background: deepskyblue;">col-8</a-col>
      <a-col span="8" style="background: lightskyblue;">col-8</a-col>
    </a-row>
    <a-row class="rowDemo">
      <a-col span="6" style="background: lightskyblue;">col-6</a-col>
      <a-col span="6" style="background: deepskyblue;">col-6</a-col>
      <a-col span="6" style="background: lightskyblue;">col-6</a-col>
      <a-col span="6" style="background: deepskyblue;">col-6</a-col>
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

<style>
.rowDemo {
  margin-top: 10px;
}
</style>
