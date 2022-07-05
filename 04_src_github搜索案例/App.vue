<template>
  <div id="app">
    <Search/>
    <List/>
  </div>
</template>

<script>
  import Search from './components/Search.vue';
  import List from './components/List.vue';
export default {
  name: "App",
  components: {List,Search},

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
