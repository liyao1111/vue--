<template>
  <div>
    <h3>搜索github用户</h3>
    <input type="text" v-model="keyWord" placeholder="输入用户" />
    <button @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  name: "SeacrchCom",
  data() {
    return {
      keyWord: "",
      usersData: [],
    };
  },
  methods: {
    search() {
      console.log(this);
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then(
          (res) => {
            this.$bus.$emit('users',res.data.items)
          },
          (err) => {
            console.log('err:',err.message)
          }
        );
    },
  },
};
</script>

<style>
</style>