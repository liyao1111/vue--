<template>
  <div id="app">
    <button @click="getStudents">请求数据</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/student/students").then(
        (res) => {
          console.log(res.data);
        },
        (err) => {
          console.log("错误：", err.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (res) => {
          console.log("cars:", res.data);
        },
        (err) => {
          console.log("err:", err.message);
        }
      );
    },
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
