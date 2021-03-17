<template>
  <div>
    <div class="click">
      <div>点击弹出</div>
      <a-popover position="top">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <a-button>上方弹出</a-button>
      </a-popover>
      <a-popover position="bottom">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <a-button>下方弹出</a-button>
      </a-popover>
      <a-popover position="left">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <a-button>左边弹出</a-button>
      </a-popover>
      <a-popover position="right">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <a-button>右边弹出</a-button>
      </a-popover>
    </div>
    <div class="hover">
      <div>鼠标悬浮</div>
      <a-popover position="top" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <a-button>上方弹出</a-button>
      </a-popover>
      <a-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <a-button>下方弹出</a-button>
      </a-popover>
      <a-popover position="left" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <a-button>左边弹出</a-button>
      </a-popover>
      <a-popover position="right" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <a-button>右边弹出</a-button>
      </a-popover>
    </div>
  </div>
</template>

<script>
import Popover from '../../../src/Popover'
import Button from '../../../src/Button'
export default {
  components: {
    'a-popover': Popover,
    'a-button': Button
  }
}
</script>
