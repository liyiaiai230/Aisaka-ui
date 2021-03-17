<template>
  <div>
    <a-button-group>
      <a-button icon="i-zuo">上一页</a-button>
      <a-button>按钮</a-button>
      <a-button icon="i-you-copy" icon-position="right">下一页</a-button>
    </a-button-group>
    <pre>
    <code>{{ content }}</code>
  </pre>
  </div>
</template>

<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'

export default {
  name: 'ButtonGroupDemos',
  components: {
    'a-button': Button,
    'a-button-group': ButtonGroup
  }
}
</script>