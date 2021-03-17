---
title: Grid
---

# grid-网格系统

`24` 网格系统，将设计建议区域按照 `24` 等分的原则进行划分。

## 概述

布局的网格化系统，我们是基于行（`row`）和列（`col`）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

通过`row` 在水平方向建立一组`column`（简写`col`） 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素 网格系统中的列是指 `1` 到 `24` 的值来表示其跨越的范围。

### Flex布局

网格化系统支持 `Flex` 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。 `Flex` 布局是基于 `24` 网格来定义每一个『盒子』的宽度，但不拘泥于网格。

## 组件注册

```vue

<script>
import {Row, Col} from "aisaka"

export default {
  components: {"a-row": Row, "a-col": Col}
}
</script>
```

## 使用效果

基础网格：
<ClientOnly>
<grid-demo1></grid-demo1>
</ClientOnly>

代码：此处`CSS`样式只是用于展示，可自己调整

```vue

<template>
  <div>
    <a-row class="rowDemo">
      <a-col span="12">col-12</a-col>
      <a-col span="12">col-12</a-col>
    </a-row>
    <a-row class="rowDemo">
      <a-col span="8">col-8</a-col>
      <a-col span="8">col-8</a-col>
      <a-col span="8">col-8</a-col>
    </a-row>
    <a-row class="rowDemo">
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
    </a-row>
  </div>
</template>

<style>
.rowDemo {
  margin-top: 10px;
}
</style>
```

网格布局：改变"align"的参数
<grid-demo2></grid-demo2>

代码：

```vue

<template>
  <div>
    靠左
    <a-row align="left">
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
    </a-row>
    居中
    <a-row align="center">
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
    </a-row>
    靠右
    <a-row align="right">
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
    </a-row>
  </div>
</template>
```

网格间隔：改变`"gutter"` 的参数，单位`px`
<grid-demo3></grid-demo3>

代码：

```vue

<template>
  <div>
    <a-row gutter="20">
      <a-col span="6">
        <div>col-6</div>
      </a-col>
      <a-col span="6">
        <div>col-6</div>
      </a-col>
      <a-col span="6">
        <div>col-6</div>
      </a-col>
      <a-col span="6">
        <div>col-6</div>
      </a-col>
    </a-row>
  </div>
</template>
``` 

网格偏移：改变`"offset"` 参数
<grid-demo4></grid-demo4>

代码：

```vue

<template>
  <div>
    <a-row>
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
      <a-col span="5" offset="1">col-5 offset-1</a-col>
    </a-row>
    <a-row>
      <a-col span="6">col-6</a-col>
      <a-col span="6">col-6</a-col>
      <a-col span="4" offset="2">col-4 offset-2</a-col>
      <a-col span="5" offset="1">col-5 offset-1</a-col>
    </a-row>
  </div>
</template>
```

响应式布局：
<grid-demo5></grid-demo5>

代码：

```vue

<template>
  <div>
    <a-row>
      <a-col span="2"
             :ipad="{span:'8'}"
             :narrow-pc="{span:'12'}"
             :pc="{span:'16'}"
             :wide-pc="{span:'22'}">

      </a-col>
      <a-col span="22"
             :ipad="{span:'16'}"
             :narrow-pc="{span:'12'}"
             :pc="{span:'8'}"
             :wide-pc="{span:'2'}">

      </a-col>

    </a-row>
  </div>
</template>
```