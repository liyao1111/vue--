<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" />
        <span>{{ user.login }}</span></a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListCom",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$bus.$on('users',(data) => { 
      console.log('list收到数据',data)
      this.users = data
     })
  },
};
</script>

<style>
li: {
  float: auto;
}
img {
  width: 50px;
  height: 50px;
}
</style>