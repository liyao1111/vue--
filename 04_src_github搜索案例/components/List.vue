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
    this.$bus.$on("users", (users) => {
      console.log("list收到users", users);
      this.users = users;
    });
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