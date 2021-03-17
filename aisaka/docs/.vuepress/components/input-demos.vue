<template>
  <div>
    <a-input value="默认输入框"></a-input>
    <a-input value="禁用" disabled></a-input>
    <a-input value="只读" readonly></a-input>
    <a-input value="错误提示" error="请输入正确信息"></a-input>
    <div>
      <div>双向绑定</div>
      <a-input v-model="value1" placeholder="支持v-model"></a-input>
      <span>value1:{{ value1 }}</span>
    </div>
    <div>
      <div>change事件</div>
      <a-input :value="value2" @change="change" placeholder="支持change事件"></a-input>
      <span>value2:{{ value2 }}</span>
    </div>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  components: {
    'a-input': Input
  },
  data() {
    return {
      value1: '1',
      value2: '2'
    }
  },
  methods: {
    change(event) {
      this.value2 = event
    }
  }
}
</script>
