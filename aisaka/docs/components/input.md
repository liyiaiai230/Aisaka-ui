---
title: Input
---

# input-输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 组件注册

```vue

<script>
import {Input} from "aisaka"

export default {
  components: {"a-input": Input}
}
</script>
```

## 使用效果

效果：
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

代码：

```vue

<template>
  <div>
    <a-input value="默认输入框"></a-input>
    <a-input value="禁用" disabled></a-input>
    <a-input value="只读" read-only></a-input>
    <a-input value="错误提示" error="请输入正确信息"></a-input>
    <div>
      <div>双向绑定</div>
      <o-input v-model="value1" placeholder="支持v-model"></o-input>
      <span>value1:{{ value1 }}</span>
    </div>
    <div>
      <div>change事件</div>
      <o-input :value="value2" @change="change" placeholder="支持change事件"></o-input>
      <span>value2:{{ value2 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: ""
    }
  },
  methods: {
    change(event) {
      this.value2 = event
    }
  }
}
</script>
```