<template>
  <div>
    <a-row>
      <a-col span="2"
             :ipad="{span:'8'}"
             :narrow-pc="{span:'12'}"
             :pc="{span:'16'}"
             :wide-pc="{span:'22'}"
             style="background: lightskyblue;"></a-col>
      <a-col span="22"
             :ipad="{span:'16'}"
             :narrow-pc="{span:'12'}"
             :pc="{span:'8'}"
             :wide-pc="{span:'2'}"
             style="background: deepskyblue;"></a-col>
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