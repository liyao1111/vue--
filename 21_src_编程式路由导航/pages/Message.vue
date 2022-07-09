<template>
  <div>
    <h3>messages</h3>
    <ul>
      <li v-for="mes of messageList" :key="mes.id">
        <!-- 跳转路由并携带query参数 to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${mes.id}/${mes.title}`">{{ mes.title }}</router-link> -->
        <!-- 跳转路由并携带params参数 to的对象写法  必须使用name 不能使用path -->
        <router-link
          :to="{
            // path:'/home/message/detail',
            name: 'xiangqing', // 必须使用name path不可用
            params: {
              id: mes.id,
              title: mes.title,
            },
          }"
          >{{ mes.title }}</router-link
        >
        <button @click="pushShow(mes)">push查看</button>
        <button @click="replaceShow(mes)">replace查看</button>
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
  methods: {
    pushShow(mes) {
      console.log(this.$router);
      this.$router.push({
        name: "xiangqing", 
        params: {
          id: mes.id,
          title: mes.title,
        },
      });
    },
    replaceShow(mes) {
      this.$router.replace({
        name: "xiangqing", 
        params: {
          id: mes.id,
          title: mes.title,
        },
      });
    },
  },
};
</script>

<style>
</style>