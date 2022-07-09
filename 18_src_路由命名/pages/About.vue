<template>
  <div>this is about</div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log("about挂载");
  },
  beforeDestroy() {
    console.log("about即将被销毁");
  },

};
</script>

<style>
</style>