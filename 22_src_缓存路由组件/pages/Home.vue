<template>
  <div>
    <h2>this is home</h2>
    <div>
       <!--多级路由路径设置  -->
      <router-link to="/home/news" class="router">news</router-link>
      <router-link to="/home/message" class="router">message</router-link>
    </div>
    <div>
      <keep-alive include="News">  // 缓存哪个路由
      <router-view></router-view>
      </keep-alive>
      
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: "Home",

};
</script>

<style scoped>
.router{
  width: 65px;
  height: 50px;
  border:1px black solid;
}
</style>