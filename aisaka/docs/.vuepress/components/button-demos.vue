<template>
  <div>
    <a-button>默认按钮</a-button>
    <a-button icon="shezhi" @click="">默认按钮</a-button>
    <a-button :loading="loading" @click="loading = !loading">默认按钮</a-button>
    <a-button disabled>默认按钮</a-button>
    <pre>
    <code>{{ content }}</code>
  </pre>

  </div>
</template>
<script>
import Button from '../../../src/button'

export default {
  data: () => {
    return {
      loading: true,
      content: `
  <a-button>默认按钮</a-button>
  <a-button icon="shezhi" @click="">默认按钮</a-button>
  <a-button :loading="loading" @click="loading = !loading">默认按钮</a-button>
  <a-button disabled>默认按钮</a-button>`
    }
  },
  components: {
    'a-button': Button
  },

}
</script>