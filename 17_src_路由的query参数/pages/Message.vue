<template>
  <div>
    <h3>messages</h3>
    <ul>
      <li v-for="mes of messageList" :key="mes.id">
        <!-- 跳转路由并携带query参数 to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${mes.id}&title=${mes.title}`">{{ mes.title }}</router-link> -->
        <!-- 跳转路由并携带query参数 to的对象写法 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: mes.id,
              title: mes.title,
            },
          }"
          >{{ mes.title }}</router-link
        >
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "message001" },
        { id: "002", title: "message002" },
        { id: "003", title: "message003" },
        { id: "004", title: "message004" },
      ],
    };
  },
};
</script>

<style>
</style>