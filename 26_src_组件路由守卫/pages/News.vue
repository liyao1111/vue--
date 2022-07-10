<template>
  <div>
    <h3>news</h3>
    <ul>
      <li :style="{ opacity }">news组件</li>
      <li><a href="#">news001</a><input type="text" /></li>
      <li><a href="#">news002</a><input type="text" /></li>
      <li><a href="#">news003</a><input type="text" /></li>
      <li><a href="#">news004</a><input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 0.1,
    };
  },
  // 路由组件被激活时触发
  activated() {
    console.log("news激活");
    this.timer = setInterval(() => {
      this.opacity -= 0.1;
      if (this.opacity <= 0) this.opacity = 1;
    }, 1000);
  },
  // 路由组件失活时触发
  deactivated() {
    console.log("news失活");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>