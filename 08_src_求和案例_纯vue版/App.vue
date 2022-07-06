<template>
  <div id="app" class="container">
    <Count/>
  </div>
</template> 

<script>
import Count from './components/Count.vue';
export default {
  name: "App",
  data() {
    return {};
  },
  components: {Count},
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  display: flex;
  justify-content: space-around;
}
</style>
