<template>
  <div>
    <a-collapse :selected.sync="selectedArray">
      <a-collapse-item title="标题1" name="1">内容1</a-collapse-item>
      <a-collapse-item title="标题2" name="2">内容2</a-collapse-item>
      <a-collapse-item title="标题3" name="3">内容3</a-collapse-item>
    </a-collapse>
    <div>一次最多展示一个</div>
    <a-collapse :selected.sync="selectedArray" single>
      <a-collapse-item title="标题1" name="1">内容1</a-collapse-item>
      <a-collapse-item title="标题2" name="2">内容2</a-collapse-item>
      <a-collapse-item title="标题3" name="3">内容3</a-collapse-item>
    </a-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
  name: 'collapseDemo',
  components: {'a-collapse': Collapse, 'a-collapse-item': CollapseItem},
  data() {
    return {
      selectedArray: ['1']
    }
  }
}
</script>