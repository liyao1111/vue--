<template>
  <div>
    <ul>
      <li>{{$route.params.id}}</li>
      <li>{{$route.params.title}}</li>
      <li>id:{{id}}</li>
      <li>title:{{title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props:['id','title'],
  mounted() {
    console.log(this.$route)
  },
};
</script>

<style>
</style>