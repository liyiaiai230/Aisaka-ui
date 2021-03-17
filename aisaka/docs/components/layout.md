---
title: Layout
---

# layout-布局

协助进行页面级整体布局。

## 组件注册

```vue

<script>
import {Layout, Header, Footer, Content, Sider} from "origin-ui"

export default {
  components: {
    "o-layout": Layout,
    "o-header": Header,
    "o-footer": Footer,
    "o-content": Content,
    "o-sider": Sider,
  }
}
</script>
```

## 使用效果

**效果：**
<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

代码：`CSS` 此处CSS样式只是用于展示，可自己调整

```vue

<template>
  <div>
    <div>
      <div>默认布局</div>
      <a-layout>
        <a-header></a-header>
        <a-content></a-content>
        <a-footer></a-footer>
      </a-layout>
    </div>
    <div>
      <div>带有侧边栏布局</div>
      <a-layout>
        <a-header></a-header>
        <a-layout>
          <a-sider></a-sider>
          <a-content></a-content>
        </a-layout>
        <a-footer></a-footer>
      </a-layout>
      <div>侧边栏靠右</div>
      <a-layout>
        <a-header></a-header>
        <a-layout>
          <a-content></a-content>
          <a-sider></a-sider>
        </a-layout>
        <a-footer></a-footer>
      </a-layout>
      <div>左右布局</div>
      <a-layout>
        <a-sider></a-sider>
        <a-layout>
          <a-header></a-header>
          <a-content></a-content>
          <a-footer></a-footer>
        </a-layout>
      </a-layout>
    </div>
  </div>
</template>
```