---
title: Toast
---

# toast-弹窗

触发事件后得到一个弹窗反馈，可自定义弹窗弹出位置和显示时间.

## 组件注册

```vue

<script>
import {Toast, Button} from "aisaka"
import Vue from "vue"

Vue.use(plugin)
export default {
  components: {"a-button": Button}
}
</script>
```

## 使用效果

**效果：**
<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

代码：

```vue

<template>
  <div style="padding-top: 16px;">
    <div>
      <a-button @click="$toast('点击弹出提示')">上方弹出</a-button>
      <a-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</a-button>
      <a-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</a-button>
    </div>
  </div>
</template>
<style>
toast {
  z-index: 30 !important;
}
</style>
```