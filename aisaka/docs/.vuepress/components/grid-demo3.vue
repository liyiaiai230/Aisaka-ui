<template>
  <div>
    <a-row gutter="20">
      <a-col span="6">
        <div style="background: lightskyblue;" class="col">col-6</div>
      </a-col>
      <a-col span="6">
        <div style="background: deepskyblue;" class="col">col-6</div>
      </a-col>
      <a-col span="6">
        <div style="background: lightskyblue;" class="col">col-6</div>
      </a-col>
      <a-col span="6">
        <div style="background: deepskyblue;" class="col">col-6</div>
      </a-col>
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
.col {
  height: 100%;
}
</style>