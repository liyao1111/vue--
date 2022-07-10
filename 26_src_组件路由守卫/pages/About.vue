<template>
  <div>this is about</div>
</template>

<script>
export default {
  name: "About",
  // 通过路由规则进入该组件时调用
  beforeRouteEnter(to, from, next) {
    console.log("@@@@@进入about组件", from, to);
    next()
  },
  // 通过路由规则离开该组件时调用
  beforeRouteLeave(to, from,next) {
    console.log("@@@@离开about", from, to);
    next()
    
  },
};
</script>

<style>
</style>