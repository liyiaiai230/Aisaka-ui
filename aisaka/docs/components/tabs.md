---
title: Tabs
---

# tabs-标签

选项卡切换组件。

## 组件注册

```vue

<script>
import {Tabs, TabsBody, TabsHead, TabsItem, TabsPane} from "aisaka"

export default {
  components: {
    "a-tabs": Tabs,
    "a-tabs-head": TabsHead,
    "a-tabs-body": TabsBody,
    "a-tabs-item": TabsItem,
    "a-tabs-pane": TabsPane
  }
}
</script>
```

## 使用效果

**效果：**
<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

代码：

```vue

<template>
  <div class="wrapper">
    默认标签
    <a-tabs :selected="selectedTab">
      <a-tabs-head>
        <a-tabs-item name="sport">体育</a-tabs-item>
        <a-tabs-item name="game">游戏</a-tabs-item>
        <a-tabs-item name="book">书籍</a-tabs-item>
      </a-tabs-head>
      <a-tabs-body>
        <a-tabs-pane name="sport">内容：体育</a-tabs-pane>
        <a-tabs-pane name="game">内容：游戏</a-tabs-pane>
        <a-tabs-pane name="book">内容：书籍</a-tabs-pane>
      </a-tabs-body>
    </a-tabs>
    禁用标签
    <a-tabs :selected="selectedTab">
      <a-tabs-head>
        <a-tabs-item name="sport">体育</a-tabs-item>
        <a-tabs-item name="game">游戏</a-tabs-item>
        <a-tabs-item name="book" disabled>书籍</a-tabs-item>
      </a-tabs-head>
      <a-tabs-body>
        <a-tabs-pane name="sport">内容：体育</a-tabs-pane>
        <a-tabs-pane name="game">内容：游戏</a-tabs-pane>
        <a-tabs-pane name="book">内容：书籍</a-tabs-pane>
      </a-tabs-body>
    </a-tabs>
    附加按钮
    <a-tabs :selected="selectedTab">
      <a-tabs-head>
        <a-tabs-item name="sport">体育</a-tabs-item>
        <a-tabs-item name="game">游戏</a-tabs-item>
        <a-tabs-item name="book">书籍</a-tabs-item>
        <template slot="actions">
          <a-button>设置</a-button>
        </template>
      </a-tabs-head>
      <a-tabs-body>
        <a-tabs-pane name="sport">内容：体育</a-tabs-pane>
        <a-tabs-pane name="game">内容：游戏</a-tabs-pane>
        <a-tabs-pane name="book">内容：书籍</a-tabs-pane>
      </a-tabs-body>
    </a-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: "sport"
    }
  }
}
</script>

<style>
.wrapper > .tabs {
  margin: 5px 0;
  border: 1px solid #ebedf0;
  border-radius: 4px;
}
</style>
```