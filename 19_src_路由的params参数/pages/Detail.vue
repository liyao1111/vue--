<template>
  <div>
    <ul>
      <li>{{$route.params.id}}</li>
      <li>{{$route.params.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route)
  },
};
</script>

<style>
</style>