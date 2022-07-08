<template>
  <div>this is home</div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("home挂载");
  },
  beforeDestroy() {
    console.log("home即将被销毁");
  },
  destroyed() {
    console.log("home销毁");
  },
};
</script>

<style>
</style>