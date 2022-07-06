<template>
  <div id="app" class="container">
    <!--作用域插槽
      数据在组件自身，但根据数据生成的结构需要组件使用者决定
    -->
    <Category title="游戏">
      <!-- 必须使用template包裹    scope接受数据对象 -->
      <template scope="games">
        <h4 v-for="(g, index) of games.games" :key="index">{{ g }}</h4>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="games">
        <ul>
          <li v-for="(g, index) of games.games" :key="index">{{ g }}</li>
        </ul>
        >
      </template>
    </Category>
    <Category title="游戏">
      <template scope="games">
        <ol>
          <li v-for="(g, index) of games.games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>
  </div>
</template> 

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  data() {
    return {};
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
