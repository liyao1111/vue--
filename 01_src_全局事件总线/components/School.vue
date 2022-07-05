<template>
  <div>
    <h3>{{ name }}</h3>
    <h3>{{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "SchoolA",
      address: "beijing ",
    };
  },
  mounted() {
   this.$bus.$on('hello',(data) => { 
    console.log('school receive:',data)
    })
  },
  beforeDestroy(){
    this.$bus.$off('hello')
  }
};
</script>

<style>
</style>