---
title: Button
---

# 按钮

按钮用于开始的一个及时操作,标记了一个操作命令，响应用户点击行为，触发相应的业务逻辑。

## 组件注册

```vue

<script>
import {Button} from "aisaka"

export default {
  components: {"a-button": Button}
}
</script>
```

## 使用效果

效果：
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

代码：

```vue

<template>
  <div>
    <a-button>默认按钮</a-button>
    <a-button icon="shezhi" icon-position="right">icon在右边</a-button>
    <a-button loading>加载中</a-button>
    <a-button icon="shezhi" :loading="loading1" @click="onClick">点击加载</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading1: false
    }
  },
  methods: {
    onClick() {
      this.loading1 = !this.loading1
    }
  }
}
</script>
```

## 按钮组合：ButtonGroup

### 组件注册

```vue

<script>
import {Button, ButtonGroup} from "aisaka"

export default {
  components: {"a-button": Button, "a-button-group": ButtonGroup}
}
</script>
```

### 使用效果

效果：
<ClientOnly>
<button-group-demos></button-group-demos>  
</ClientOnly>
代码：

```vue

<template>
  <div>
    <a-button-group>
      <a-button icon="left">上一页</a-button>
      <a-button>按钮</a-button>
      <a-button icon="right" icon-position="right">下一页</a-button>
    </a-button-group>
  </div>
</template>
```