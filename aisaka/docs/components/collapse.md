---
title: Collapse
---

# collapse-手风琴

可以折叠/展开的内容区域。

## 组件注册

```vue

<script>
import {Collapse, CollapseItem} from "aisaka"

export default {
  components: {"a-collapse": Collapse, 'a-collapse-item': CollapseItem}
}
</script>
```

## 使用效果

**效果：**
<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>
代码：

```vue

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
export default {
  data() {
    return {
      selectedArray: ['1']
    }
  }
}
</script>
```