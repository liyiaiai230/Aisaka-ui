---
title: 快速上手
---

# 快速上手

## 样式引入

```javascript
import "aisaka/dist/index.css"
```

## 组件注册

在组件中引入

```vue
<script>
    import {Button} from "aisaka"
    export default {
      components: {"a-button":Button}
    }
</script>
```

## 使用

```vue
<template>
  <div>
    <a-button>按钮</a-button>
  </div>
</template>
```