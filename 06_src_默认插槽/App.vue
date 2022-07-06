<template>
  <div id="app" class="container">
    <Category :listData="foods" title="美食">
      <img src="./assets/logo.png" alt="" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">
          {{ game }}
        </li>
      </ul>
    </Category>
    <Category title="电影">
      <video class="film" controls :src="films"></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  data() {
    return {
      foods: ["apple", "banna", "orange", "peach"],
      games: ["lol", "dota", "cod", "dnf"],
      films: '//player.bilibili.com/player.html?aid=804122638&bvid=BV1Zy4y1K7SH&cid=373348512&page=102',
    };
  },
  components: { Category },
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
