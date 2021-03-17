<template>
  <div>
    <div>
      <div>默认布局</div>
      <a-layout style="color: white; margin-bottom:50px;">
        <a-header style="height: 50px; background:lightskyblue;"></a-header>
        <a-content style="height: 100px; background:deepskyblue;"></a-content>
        <a-footer style="height: 50px; background:lightskyblue;"></a-footer>
      </a-layout>
    </div>
    <div>
      <div>带有侧边栏布局</div>
      <a-layout style="color: white; overflow:hidden; margin-bottom:50px;">
        <a-header style="height: 50px; background:lightskyblue;"></a-header>
        <a-layout>
          <a-sider style="height: 100px; background:#ddd; width:200px; color: black;"></a-sider>
          <a-content style="height: 100px; background:deepskyblue;"></a-content>
        </a-layout>
        <a-footer style="height: 50px; background:lightskyblue;"></a-footer>
      </a-layout>
      <div>侧边栏靠右</div>
      <a-layout style="color: white; overflow:hidden; margin-bottom:50px;">
        <a-header style="height: 50px; background:lightskyblue;"></a-header>
        <a-layout>
          <a-content style="height: 100px; background:deepskyblue;"></a-content>
          <a-sider style="height: 100px; background:#ddd; width:200px; color: black;"></a-sider>
        </a-layout>
        <a-footer style="height: 50px; background:lightskyblue;"></a-footer>
      </a-layout>
      <div>左右布局</div>
      <a-layout style="color: white; overflow:hidden; margin-bottom:50px;">
        <a-sider style=" background:#ddd; width:200px; color: black;"></a-sider>
        <a-layout>
          <a-header style="height: 50px; background:lightskyblue;"></a-header>
          <a-content style="height: 100px; background:deepskyblue;"></a-content>
          <a-footer style="height: 50px; background:lightskyblue;"></a-footer>
        </a-layout>
      </a-layout>
    </div>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Footer from '../../../src/footer'
import Content from '../../../src/content'
import Sider from '../../../src/sider'

export default {
  name: 'layout-demos',
  components: {
    'a-layout': Layout,
    'a-header': Header,
    'a-footer': Footer,
    'a-content': Content,
    'a-sider': Sider,
  }
}
</script>