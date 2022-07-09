<template>
  <div id="app">
    <Banner />
    <div class="container">
      <!-- 使用router-link实现路由切换 -->
      <router-link to="/home"  class="router home" active-class="active"
        >Home</router-link
      >
      <router-link to="/about" class="router about" active-class="active"
        >About</router-link
      >
      <div class="component-container">
        组件展示部分
        <!-- 使用router-view -->
        <router-view class="router-view"></router-view>
      </div>
    </div>
  </div>
</template> 

<script>
import Banner from "./components/Banner";
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    // console.log('app:',this)
  },
  components: { Banner },
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
  width: 500px;
  height: 500px;
  background-color: bisque;
}
.router {
  display: inline-block;
  width: 50px;
  height: 50px;
  text-decoration: none;
}
.active {
  background-color: red;
}
.home {
  background-color: skyblue;
}
.about {
  background-color: #bfa;
}
.component-container {
  background-color: aquamarine;
  width: 300px;
  height: 300px;
}
.router-view {
  color: red;
}
</style>
