<template>
  <div>
    <h3>搜索github用户</h3>
    <input type="text" v-model="keyWord" placeholder="输入用户" />
    <button @click="search">搜索</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SeacrchCom",
  data() {
    return {
      keyWord: "",
      usersData:[]
    };
  },
  methods: {
    search() {
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (res) => {
          console.log(res.data.items);
          this.usersData = res.data.items
          this.$bus.$emit('users',res.data.items)
        },
        (err) => {
          console.log("err:", err);
        }
      );
    },
  },
};
</script>

<style>
</style>