<template>
  <div id="app" class="container">
    <Count/>
    <hr>
    <Person/>
  </div>
</template> 

<script>
import Count from './components/Count.vue';
import Person from './components/Person.vue';
export default {
  name: "App",
  data() {
    return {};
  },
  components: {Count,Person},
  mounted() {
    console.log('app',this)
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
